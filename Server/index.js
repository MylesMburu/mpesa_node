const express = require('express');
const fetch = require('cross-fetch');
require('dotenv').config();

const app = express();
const consumer_key = process.env.consumer_key;
const consumer_secret = process.env.consumer_secret;

//form a buffer of the consumer key and secret
const buffer = new Buffer.from(consumer_key+":"+consumer_secret);

function stk_push(phoneNumber){
    const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
    const header = {
        'Content-Type':'application/json',
        Application: 'Bearer yDzq2va6I82iSR9mdKfLM5mZNUi3',
    }
}