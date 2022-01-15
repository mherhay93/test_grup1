import { GoLocation, GoClock } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";



export default function Event({id,picture,title,address,registered,date, ticket, isHidden}) {
 
  return (
    !isHidden ?
    <section className='event-box'>
      <div className='img-container'>
        <img src={picture} alt='img' />
        <div className="date-info">
          <p>{ date}</p>
      </div>
      </div>
      
      <div className="info-container">
        <div>
          <h1>{ title }</h1>
          <h3>Tickets: { ticket}</h3>
        </div>
        <div>
         <GoClock className="info-logo"/>
          <span>Start { registered }</span>
        </div>
        <div className="info">
         <GoLocation className="info-logo" />
          <span>{ address }</span>
      </div >
        <button className="info-btn">Details</button>
        <div className="like-container">
          <FaRegHeart className="heart"/>
        </div>
      </div>
      </section>
      :null
  );
}