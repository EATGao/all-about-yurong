import React, { useState } from 'react'
import Header from '../../Header/Header'
import './Contact.css'
import Footer from '../../Footer/Footer';

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
          <h2>Leave me a message, I will get back within <strong>2 days :)</strong> </h2>
          <h3 className='sent_indicator'></h3>
          <div className='contact__message__form'>
            <form>
              <label htmlFor='email'>Email <strong>*</strong></label>
              <input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required/>
              <label htmlFor='name'>Name<strong>*</strong></label>
              <input id='name' type='text' value={name} onChange={e => setName(e.target.value)} required/>
              <label htmlFor='subject'>Subject<strong>*</strong></label>
              <input id='subject' type='text' value={subject} onChange={e => setSubject(e.target.value)} required/> 
              <label htmlFor='message'>Message<strong>*</strong></label>
              <input id='message' type='text' value={message} onChange={e => setMessage(e.target.value)} required/>
              <button id='send' onClick={send}>Send</button>
            </form>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact