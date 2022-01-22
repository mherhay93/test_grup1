import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context/EventContext";

import "./admin.css";

const Admin = () => {
  const { t } = useTranslation();

  const [newEvent, setNewEvent] = useState({
    title: "",
    picture: "",
    date: "",
    registered: "",
    field: "",
    ticket: "",
    info: "",
    address: "",
  });

  const { setEvents, events, addEvents } = useGlobalContext();

  const changeInputs = (e) => {
    const { value, name } = e.target;
    setNewEvent({
      ...newEvent,
      isActive: false,
      [name]: value,
    });
  };
  const handelSubmit = (e) => {
    // e.preventDefault();
    // addEvents(newEvent)
    console.log(newEvent);
    fetch("http://localhost:8000/events", {
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        // if (!res.ok) {
        //   throw Error("could not fetch tha data");
        // }
        return res.json();
      })
      .then((data) => {
        setEvents([data, ...events]);
        setNewEvent({
          title: "",
          picture: "",
          date: "",
          registered: "",
          field: "",
          ticket: "",
          info: "",
          address: "",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="admin-container">
      <div className="admin-container-prof">
        <div>
          <p>Name</p>
          <p>Surname</p>
          <p>Nikname</p>
        </div>
      </div>
      <div className="admin-container-myevents-add">
        <div className="myEvents"></div>
        <form className="form-admin" onSubmit={handelSubmit}>
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
        </form>
      </div>
    </div>
  );
};

export default Admin;
