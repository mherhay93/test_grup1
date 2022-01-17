import './admin.css'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <form class="form-contactUs" action="" method="">
    <div class="form-title">
      <p>Add new event</p>
      
    </div>
    <div class="container-inputs">
      <input class="yourName" placeholder="Event title" />
      <input class="emailAddress" placeholder="Image" />
       <input class="phoneNumber" placeholder="Date: eg. 21 Feb" />
       <input class="phoneNumber" placeholder="Time: eg. 16:00 - 19:30" />
       <select >
         <option value="music">Music</option>
          <option value="education">Education</option>
          <option value="culture">Culture</option>
          <option value="movie">Movie</option>
          <option value="tourism">Tourism</option>
       </select>
          <textarea class="yousMessage" placeholder="Description"></textarea>
          <Link to='/events'>
            <button class="formButton" type="submit">ADD Event</button>
          </Link>
    
    </div>
  </form>
    </div>
  )
}

export default Admin


