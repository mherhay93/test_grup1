import React from 'react'
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';


import '../home/home.css'

const Home = () => {
  
  const { t } = useTranslation();

  const navigate = useNavigate()

   const goAbout = () => {
    navigate('/About')
   }

   const goEvent = () => {
    navigate('/Events')
   }

  return (
    <header className="header">
    <div className="header-slideShow">
      <div className="header-slideShow-info">
        <p>{t("One_stop")}</p>
        <p>{t("Event_planner")}</p>
        <p>{t("Every_event")}</p>
        <div className="header-slideShow-buttons">
          <button onClick={goAbout}>{t("About_us")}</button>
          <button onClick={goEvent}>{t("Get_started")}</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Home
