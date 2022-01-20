import { useParams } from "react-router-dom"
import { useGlobalContext } from './../../context/EventContext';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './events.css'

const EventDetail = () => {
  const {events} = useGlobalContext();
  const { id } = useParams();
  const { t } = useTranslation();


  return (
    <div className="details-container">
      {
        events && events.filter(item => item._id === id).map(item => {
          const  {picture, date,title,ticket,registered,info, address, _id } = item
          return (
            <section key={_id}>
              <div>
                <h1>{title } </h1>
                <p>{info}</p>
                <p>{t("Date")} {date}</p>
                <p>{t("Time")} { registered }</p>
                <address>{t("Address")}{address}</address>
               <Link to="/events">
                 <button>{t("Go_back")}</button>
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
