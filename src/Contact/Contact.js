import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = (props) => {

  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dn9akhh',   // Quello che hai creato prima (es. service_mqvxtyq)
      'template_knct55j',  // Quello del template appena salvato
      form.current,
      'HqvOCMyi3-QcKvSAN'    // La trovi in Account > API Keys su EmailJS
    )
    .then(() => {
        //alert("Inviata! Ti risponderò presto.");
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    }, (error) => {
        console.log(error.text);
    });
    

    
  };

  return (
    <div className="contact">
      <h1 ref={props.contactRef} className="contact-title">{props.isEng ? "CONTACT US" : "CONTATTACI"}</h1>
      <span></span>
      <p>Inviaci un email compilando il form oppure scrivici su WhatsApp: <a href="https://wa.me/393314177958" target="_blank" rel="noopener noreferrer">+39 331 41 77 958</a>.</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder={`${props.isEng ? "Name" : "Nome"}`} required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder={`${props.isEng ? "Your request" : "La tua richiesta"}`} required />
        <button type="submit">{props.isEng ? "Send Email" : "Invia Email"}</button>
        <p className={`successo-text ${success ? "show" : ""}`}>{props.isEng ? "Email sent successfully! You will receive a response shortly." : "Email inviata con successo! Riceverai a breve una risposta."}</p>
      </form>
    </div>
  );
};

export default Contact;