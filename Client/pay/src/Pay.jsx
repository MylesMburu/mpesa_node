import React from 'react'
import './Pay.css'

export const Pay = () => {
  return (
    <div className='container'>
        <div>
            <h1>Pay With Mpesa</h1>
        </div>

        <div>
            <form action="" method="post">
                <input type="text" placeholder='Phone Number' />
                <input type="number" name="Amout" placeholder='Amount' />
                <button type="submit">Pay</button>
            </form>
        </div>
    </div>
  )
}
