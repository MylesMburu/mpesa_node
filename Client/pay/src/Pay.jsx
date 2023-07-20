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
    axios.post('http://localhost:3000/pay', data)
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
