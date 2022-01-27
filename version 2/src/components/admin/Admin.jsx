import { useState, useEffect } from 'react'
import './admin.css'
import { useGlobalContext } from '../../context/EventContext'

const Admin = () => {
    const [newEvent, setNewEvent] = useState({
    title: "",
    picture: "",
    date: "",
    registered: "",
    field: "",
    ticket:"",
    info: "",
    address: "",
  })
  
  const { events,addEvents, isAdded, handelRemove, isRemove } = useGlobalContext()
 
  
  const changeInputs = (e) => {
    const { value, name } = e.target
    setNewEvent ({
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
    <div>
      <form className="form-admin"
        onSubmit={handelSubmit}>
        <div className="form-admin-title">
          <p>Add new event</p>
        </div>
        <div className="admin-container-inputs">
          <input className="eventTitle" placeholder="Event title"
            required
            value = {newEvent.title}
            name="title" 
            onChange = {changeInputs}
          />
          <input className="eventImage" placeholder="Image"
            required
            value = {newEvent.picture}
            name="picture" 
            onChange = {changeInputs}
          />
          <input className="eventDate" placeholder="Date: eg. Feb 21"
            required
            value = {newEvent.date}
            name="date"
            onChange = {changeInputs}
          />
          <input className="eventDate" placeholder="Time: eg. 16:00 - 19:30"
            required
            value = {newEvent.registered}
            name="registered"
            onChange = {changeInputs}
          />
          <input className="eventDate" placeholder="Price: eg. ֏4500"
            required
            value = {newEvent.ticket}
            name="ticket" 
            onChange = {changeInputs}
          />
          <input className="eventDate" placeholder="Address"
            required
            value = {newEvent.address}
            name="address" 
            onChange = {changeInputs}
          />
          <select value = {newEvent.field}
            name = "field"
            onChange = {changeInputs}>
            <option value="music">Music</option>
            <option value="education">Education</option>
            <option value="culture">Culture</option>
            <option value="movie">Movie</option>
            <option value="tourism">Tourism</option>
          </select>
           <textarea className="yousMessage" placeholder="Description"
            value = {newEvent.info}
            name = "info"
             onChange = {changeInputs}
          ></textarea>
          { !isAdded && <button className="formButton" type="submit">Add Event</button>}
           { isAdded && <button className="formButton" type="submit" disabled >Adding new event...</button>}
           <button className="formButton" type="button"
           onClick={handelRemove}
          >{ isRemove ? "Removing old Events..." : "Remove old Events" }</button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
