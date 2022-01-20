import React from 'react'
import { useTranslation } from 'react-i18next';
import '../contacts/contacts.css'


const Contacts = () => {

  const { t } = useTranslation();

  return (
    <form className="form-contactUs" action="" method="">
    <div className="form-title">
      <p>{t("Contact_us")}</p>
      <div className="form-message">
        <p>{t("Keep_in_Touch")}</p>
        <p>{t("With_Harmoni")}</p>
      </div>
    </div>
    <div className="container-inputs">
      <input className="yourName" placeholder={t("Your_Name")} />
      <input className="emailAddress" placeholder={t("Email_Address")} />
      <input className="yourCountry" placeholder={t("Your_Country")} />
      <input className="phoneNumber" placeholder={t("Phone_Number")} />
      <textarea className="yousMessage" placeholder={t("Your_Message")}></textarea>
      <button className="formButton" type="submit">{t("Send_mail")}</button>
    </div>
  </form>
  )
}

export default Contacts
