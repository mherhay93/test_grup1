import './body.css'
import { useTranslation } from 'react-i18next';


const Body = () => {

  const { t } = useTranslation();

  return (
    <section className="main-hero">
        <div className="hero-container">
          <div className="hero-info">
             <h2 >{t("One_stop")}</h2>
             <h1>{t("Event_planner")}</h1>
          </div>
           {/* <div className="hero-links">
              <li className="line">
                <a href="#">Home</a>
              </li>
            <li>
                <a href="#">Events</a>
            </li>
           </div> */}
        </div>
      </section>
  )
}

export default Body
