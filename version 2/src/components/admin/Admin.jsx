import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context/EventContext";
import { useDisabledRegister } from "../../context/registerContext.jsx";

import "./admin.css";

const Admin = () => {
  const { t } = useTranslation();

  const { dataAdmin } = useDisabledRegister();
  console.log(dataAdmin);

  const [newEvent, setNewEvent] = useState({
    title: "",
    picture: "",
    date: "",
    registered: "",
    field: "",
    ticket:"",
    info: "",
    address: "",
  });

  const { setEvents, events, addEvents } = useGlobalContext();

  const changeInputs = (e) => {
    const { value, name } = e.target;
    setNewEvent({
      ...newEvent,
      isActive: false,
      _id:events.length + "",
        [name]: value}) 
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    addEvents(newEvent)
  // fetch('http://localhost:8000/events', {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(newEvent)
  //   }).then(() => console.log("new event added"))
     setNewEvent({
       title: "",
       picture: "",
       date: "",
       registered: "",
       field: "",
       ticket:"",
      info: "",
      address: "",
    })
  }

  return (
    <div className="admin-container">
      <div className="container-back">
        <div className="admin-container-prof">
          <div className="user-info-admin">
            <p className="adm-name">Name</p>
            <p className="adm-surname">Surname</p>
            <p className="adm-nick">Nickname</p>
          </div>
        </div>
      </div>
      <div className="admin-container-myevents-add">
        <form className="form-admin" onSubmit={handelSubmit}>
          <div className="form-back">
            <div className="form-admin-title">
              <p>{t("Add new event")}</p>
            </div>
            <div className="admin-container-inputs">
              <input
                className="eventTitle"
                placeholder={t("Event title")}
                value={newEvent.title}
                name="title"
                onChange={changeInputs}
              />
              <input
                className="eventImage"
                placeholder={t("Image")}
                value={newEvent.picture}
                name="picture"
                onChange={changeInputs}
              />
              <input
                className="eventDate"
                placeholder={t("Date: eg. 21 Feb")}
                value={newEvent.date}
                name="date"
                onChange={changeInputs}
              />
              <input
                className="eventDate"
                placeholder={t("Time: eg. 16:00 - 19:30")}
                value={newEvent.registered}
                name="registered"
                onChange={changeInputs}
              />
              <input
                className="eventDate"
                placeholder="Price: eg. ֏4500"
                value={newEvent.ticket}
                name="ticket"
                onChange={changeInputs}
              />
              <input
                className="eventDate"
                placeholder="Address"
                value={newEvent.address}
                name="address"
                onChange={changeInputs}
              />
              <select value={newEvent.field} name="field" onChange={changeInputs}>
                <option value="music">{t("Music")}</option>
                <option value="education">{t("Education")}</option>
                <option value="culture">{t("Culture")}</option>
                <option value="movie">{t("Movie")}</option>
                <option value="tourism">{t("Tourism")}</option>
              </select>
              <textarea
                className="yousMessage"
                placeholder="Description"
                value={newEvent.info}
                name="info"
                onChange={changeInputs}
              ></textarea>
              <button className="formButton" type="submit">
                ADD Event
              </button>
              {/* <Link to="/events">
              <button className="formButtonAdmin" type="submit">
                {t("ADD Event")}
              </button>
            </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
