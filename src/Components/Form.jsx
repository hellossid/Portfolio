import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='form'>
        <form action="https://formsubmit.co/swarnimsid2@gmail.com" method="POST">
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder='Write your thoughts here' />    
            <button className='btn' >Send</button>
        </form>
    </div>
  )
}

export default Form