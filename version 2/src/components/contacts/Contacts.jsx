import React from 'react'

import '../contacts/contacts.css'

const Contacts = () => {
  return (
    <form className="form-contactUs" action="" method="">
    <div className="form-title">
      <p>CONTACT US</p>
      <div className="form-message">
        <p>Keep in Touch</p>
        <p>With Harmony</p>
      </div>
    </div>
    <div className="container-inputs">
      <input className="yourName" placeholder="Your Name" />
      <input className="emailAddress" placeholder="Email Address" />
      <input className="yourCountry" placeholder="Your Country" />
      <input className="phoneNumber" placeholder="Phone Number" />
      <textarea className="yousMessage" placeholder="Your Message"></textarea>
      <button className="formButton" type="submit">SEND MAIL</button>
    </div>
  </form>
  )
}

export default Contacts
