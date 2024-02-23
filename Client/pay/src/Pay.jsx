import React from 'react'
import './Pay.css'
import axios from 'axios'
import { FaGithub } from "react-icons/fa";

export const Pay = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      phone: e.target.phone.value,
      amount: e.target.amount.value
    }
    console.log(data)
    axios.post('http://localhost:8000/pay', data)
    .then(res => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err) 
      console.log('Could not send data to server')
    } );
  }
  
  return (
    <div className='container'>
        <div className='header'>
            <h1>Pay With Mpesa </h1>
            <a href="https://github.com/MylesMburu/mpesa_node" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="phone" placeholder='Phone Number' />
                <input type="number" name="amount" placeholder='Amount' />
                <button type="submit">Pay</button>
            </form>
        </div>
    </div>
  )
}
