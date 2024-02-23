const express = require('express');
const axios = require('axios');
const moment = require('moment');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const getToken = async(res,req,next) => {
    const consumer_key = process.env.CONSUMER_KEY;
    const consumer_secret = process.env.CONSUMER_SECRET;
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const auth = Buffer.from(`${consumer_key}:${consumer_secret}`).toString('base64');

    await axios.get(url, {
        headers: {
            authorization: `Basic ${auth}`
        }
    }).then(
        (data)=>{
            token = data.data.access_token; // save the token from the response
            console.log(data.data);
            next(); // call the next middleware
        }
    ).catch(
        (err)=>{
            console.log(err);
        }
    )
}

  const stkpush = async (req, res) => {
    const shortCode = '174379';
    const phoneNumber = req.body.phone.substring(1);
    const amount = req.body.amount;
    const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    const timestamp = moment().format('YYYYMMDDHHmmss');
    const password = Buffer.from(`${shortCode}${process.env.PASSKEY}${timestamp}`).toString('base64');

    const data = {
        'BusinessShortCode': shortCode,
        'Password': password, 
        'Timestamp': timestamp, 
        'TransactionType': 'CustomerPayBillOnline',
        'Amount': amount,
        'PartyA': `254${phoneNumber}`,
        'PartyB': shortCode,
        'PhoneNumber': `254${phoneNumber}`,
        'CallBackURL': 'https://ab37-41-212-65-18.ngrok.io/pay',
        'AccountReference': 'test',
        'TransactionDesc': 'test'
    }

    await axios.post(url, data, {       
        headers: {
            authorization: `Bearer ${token}` 
    }
  }).then(
        (data)=>{
            console.log(data.data);
            res.status(200).json(data.data);
        }
  ).catch((err)=>{  
        console.log(err);
        res.status(500).json(err);
  });
}


module.exports = {getToken, stkpush};