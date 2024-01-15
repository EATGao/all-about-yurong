import React, { useState, useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function Contact() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("");
  const [indicatorVisible, setindicatorVisible] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    /*write send function here*/
    emailjs.sendForm('serviceid', 'templateid', form.current, 'publickey')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });

    setEmail("");
    setName("");
    setSubject("");
    setMessage("");

    // document.querySelector('.sent__indicator').c
    setindicatorVisible(true);

  }

  return (
    <div>
      <Header />
      <article className='contact' style={{ minHeight: '100vh' }}>
        <h2>Leave me a message, I will get back within <strong>2 days :)</strong> </h2>
        <h3 className={indicatorVisible? 'sent__indicator__show':'sent__indicator'}><strong>Sent!</strong> Thank you for your message!</h3>
        <div className='contact__message__form'>
          <form  ref={form} onSubmit={sendEmail}>
            <label htmlFor='email'>Email <strong>*</strong></label>
            <input id='email' type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required/>
            <label htmlFor='name'>Name<strong>*</strong></label>
            <input id='name' type='text' name='name' value={name} onChange={e => setName(e.target.value)} required/>
            <label htmlFor='subject'>Subject<strong>*</strong></label>
            <input id='subject' type='text' name='subject' value={subject} onChange={e => setSubject(e.target.value)} required/> 
            <label htmlFor='message'>Message<strong>*</strong></label>
            <textarea id='message' type='text' name='message' value={message} onChange={e => setMessage(e.target.value)} required/>
            <input id='send' type='submit' value='Send' />
          </form>
        </div>
      </article>
      <Footer />
    </div>
  )
}

export default Contact