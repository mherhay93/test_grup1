import { useParams } from "react-router-dom"
import { useGlobalContext } from './../../context/EventContext';
import { Link } from "react-router-dom";
import './events.css'

const EventDetail = () => {
  const {events} = useGlobalContext()
  const { id } = useParams()

  return (
    <div className="details-container">
      {
        events && events.filter(item => item._id === id).map(item => {
          const  {picture, date,title,ticket,registered,info, address, _id } = item
          return (
            <section key={_id}>
              <div>
                <h1>{ title } </h1>
                <p>{info}</p>
                <p>Date: {date}</p>
                <p>Time: { registered }</p>
                <address>Address:{address}</address>
               <Link to="/events">
                 <button>Go Back</button>
              </Link>
             </div>
            </section>
          )
          
        })
      }
     
     
    </div>
  )
}

export default EventDetail
