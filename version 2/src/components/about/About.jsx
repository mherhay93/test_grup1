import React from 'react'
import img_age from "../../img/img_age.png"
import "./about.css"
import { useNavigate } from "react-router-dom"
import {FaChevronCircleUp, FaChevronCircleDown} from "react-icons/fa";
import AboutAward from './aboutAwards';
import { useTranslation } from 'react-i18next';



const About = () => {

  const { t } = useTranslation();


  const navigate = useNavigate()

   const goBack = () => {
    navigate('/')
   }


  return (
    <>
   <div className="image_section">
      <div className="image_section_op">
        <div className="image_section_container">
          <div className="small_title">
            {t("All_you_need")}
          </div>     
          <div className="big_title">
            <strong>{t("About")} </strong> 
            HARMONI
          </div>     
          <div className="image_section_list">
            
            <ul>
              <li className="list_home" onClick={goBack}><a href='#'>{t("Home")}</a></li>
              <li className="list_about">{t("About_us")}</li>
            </ul>   
          </div>
        </div>
      </div>

    </div>

    <div className="our_management_section">
      <div className="management_container">
        <div className="section_title">
          <div className="section_small_title">
              {t("We_are_harmoni")}
          </div>
          <div className="section_big_title">
            <strong>No.1 </strong>
            {t("Events_management")}
          </div>
          <div className="managment_section_button">
            <button>{t("Get_started")}</button>
          </div>
         </div>
         <div className="management_item">
            <div className="item_title">
              <h3 className="item_title_text">
                {t("Our_mission")}

                </h3>
            </div>
            <div className="management_item_title">
              {t("mission_item_title")}
            </div>
            <div className="management_item_title2">
             {t("mission_item_title2")}

            </div>
          </div>
          <div className="management_item">
            <div className="item_title">
              <h3 className="item_title_text">
                 {t("Our_vission")}

              </h3>
            </div> 
            <div className="management_item_title">
            {t("vission_item_title")} 
            </div>
            <div className="management_item_title2">
              Harmoni {t("vission_item_title2")} 

            </div>
        </div>
      </div>
       
    </div>
    <div className="awards_section">
      <div className="awards_section_container">
        <div className="awards_section_image">
          <img src={img_age} alt="img_age" />
        </div>
        <div className="winning_awards">
          <div className="winning_awards_title">
            <div className="awards_small_title">
              {t("Harmoni_awaed")}

            </div>
            <div className="awards_big_title">
              {t("Our_winning")}<strong>{t("Awards")}</strong>
            </div>
          </div>
          <div className="award_item_area">
            <span className="arrow_up">
              <FaChevronCircleUp />
            </span>
            <span className="arrow_down">
              <FaChevronCircleDown />
            </span>
            <AboutAward />
          </div>
        </div>
       
      </div>
    </div>

    
    </>
    
  )
}

export default About
