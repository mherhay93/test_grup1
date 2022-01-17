import "./admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <form className="form-admin" action="" method="">
        <div className="form-admin-title">
          <p>Add new event</p>
        </div>
        <div className="admin-container-inputs">
          <input className="eventTitle" placeholder="Event title" />
          <input className="eventImage" placeholder="Image" />
          <input className="eventDate" placeholder="Date: eg. 21 Feb" />
          <input className="eventDate" placeholder="Time: eg. 16:00 - 19:30" />
          <select>
            <option value="music">Music</option>
            <option value="education">Education</option>
            <option value="culture">Culture</option>
            <option value="movie">Movie</option>
            <option value="tourism">Tourism</option>
          </select>
          <Link to="/events">
            <button className="formButtonAdmin" type="submit">
              ADD Event
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Admin;
