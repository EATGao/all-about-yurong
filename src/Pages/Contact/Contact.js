import React, { useState } from 'react'
import Header from '../../Header/Header'
import './Contact.css'

function Contact() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("");

  const send = (e) => {
    e.preventDefault();

    /*write send function here*/
  }

  return (
    <div>
        <Header />
        <div className='contact'>
          <h2>Leave me a message, I aim to get back within 2 business days. </h2>
          <h3 className='sent_indicator'></h3>
          <div className='contact__message__form'>
            <form>
              <label for='email'>Email</label>
              <input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required/>
              <label for='name'>Name</label>
              <input id='name' type='text' value={name} onChange={e => setName(e.target.value)} required/>
              <label for='subject'>Subject</label>
              <input id='subject' type='text' value={subject} onChange={e => setSubject(e.target.value)} required/> 
              <label for='message'>Message</label>
              <input id='message' type='text' value={message} onChange={e => setMessage(e.target.value)} required/>
              <button id='send' onClick={send}>Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact