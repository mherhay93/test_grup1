
import { GoLocation, GoClock } from "react-icons/go";
import bg from './bg.jpg'

export default function Event() {
  return (
    <section className='event-box'>
      <div className='img-container'>
        <img src={bg} alt='img' />
        <div className="date-info">
        <p>14 Jan</p>
      </div>
      </div>
      
      <div className="info-container">
        <div>
         <h1>Barcelona Food Truck Festival 2018-2019</h1>
         <h3>Tickets from &#1423;5000</h3>
        </div>
        <div>
         <GoClock className="info-logo"/>
        <span>Start 20:00pm - 22:00pm</span>
        </div>
        <div className="info">
         <GoLocation className="info-logo" />
         <span>Manhattan, New York</span>
      </div >
         <button className="info-btn">Details</button>
      </div>
    </section>
  );
}