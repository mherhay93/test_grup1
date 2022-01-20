import { GoLocation, GoClock } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export default function Event({
  _id,
  picture,
  title,
  address,
  registered,
  date,
  ticket,
  isHidden,
}) {

  const { t } = useTranslation();


  return !isHidden ? (
    <section className="event-box">
      <div className="img-container">
        <img src={picture} alt="img" />
        <div className="date-info">
          <p>{date}</p>
        </div>
      </div>

      <div className="info-container">
        <div>
          <h1>{title}</h1>
          <h3>{t("Tickets")} {ticket}</h3>
        </div>
        <div>
          <GoClock className="info-logo" />
          <span>{t("Start")} {registered}</span>
        </div>
        <div className="info">
          <GoLocation className="info-logo" />
          <span>{address}</span>
        </div>
        <Link to={`/events/${_id}`}>
          <button className="info-btn">{t("Details")}</button>
        </Link>
        <div className="like-container">
          <FaRegHeart className="heart" />
        </div>
      </div>
    </section>
  ) : null;
}
