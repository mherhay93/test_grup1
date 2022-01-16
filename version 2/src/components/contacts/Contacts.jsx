import React from 'react'

import '../contacts/contacts.css'

const Contacts = () => {
  return (
    <form className="form-contactUs" action="" method="">
    <div className="form-title">
      <p>CONTACT US</p>
<<<<<<< HEAD
      <div className="form-messige">
=======
      <div className="form-message">
>>>>>>> Hakob
        <p>Keep in Touch</p>
        <p>With Harmony</p>
      </div>
    </div>
    <div className="container-inputs">
      <input className="yourName" placeholder="Your Name" />
<<<<<<< HEAD
      <input className="emailAddress" placeholder="Emial Address" />
=======
      <input className="emailAddress" placeholder="Email Address" />
>>>>>>> Hakob
      <input className="yourCountry" placeholder="Your Country" />
      <input className="phoneNumber" placeholder="Phone Number" />
      <textarea className="yousMessage" placeholder="Your Message"></textarea>
      <button className="formButton" type="submit">SEND MAIL</button>
    </div>
  </form>
  )
}

export default Contacts
