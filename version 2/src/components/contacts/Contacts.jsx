import React from 'react'

import '../contacts/contacts.css'

const Contacts = () => {
  return (
    <form class="form-contactUs" action="" method="">
    <div class="form-title">
      <p>CONTACT US</p>
      <div class="form-messige">
        <p>Keep in Touch</p>
        <p>With Harmoni</p>
      </div>
    </div>
    <div class="container-inputs">
      <input class="yourName" placeholder="Your Name" />
      <input class="emailAddress" placeholder="Emial Address" />
      <input class="yourCountry" placeholder="Your Country" />
      <input class="phoneNumber" placeholder="Phone Number" />
      <textarea class="yousMessage" placeholder="Your Message"></textarea>
      <button class="formButton" type="submit">SEND MAIL</button>
    </div>
  </form>
  )
}

export default Contacts
