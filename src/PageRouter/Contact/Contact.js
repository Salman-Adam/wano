import React from 'react'
import './Contact.css'
import {FaEnvelopeOpenText} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='Contact'>
      <div className='row'>
        <div className='col-md-6 m-auto'>
          <form className='form'>
            <h2>تواصل الان</h2>
              <label>البريد الالكتروني</label>
            <div className='input-group'>
              <input type='email' placeholder='email@example.com' className='form-control'/>
            </div>
              <label>الرسالة</label>
            <div className='input-group'>
              <textarea placeholder='اكتب هنا ...' className='form-control'></textarea>
            </div>
            <div className='contact_send'>
              <button type='submit' className='btn'>ارسال <FaEnvelopeOpenText/></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact