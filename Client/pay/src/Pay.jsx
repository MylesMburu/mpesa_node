import React from 'react'
import './Pay.css'
import axios from 'axios'

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
        <div>
            <h1>Pay With Mpesa</h1>
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
