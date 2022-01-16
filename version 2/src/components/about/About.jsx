import React from 'react'
import { useAwardData } from "../../context/aboutContext"
import img_age from "../../img/img_age.png"
import "./about.css"
import { useNavigate } from "react-router-dom"
import {FaChevronCircleUp, FaChevronCircleDown} from "react-icons/fa";


const About = () => {

  const navigate = useNavigate()

   const goBack = () => {
    navigate('/')
   }

  const {award} = useAwardData()

  return (
    <>
   <div className="image_section">
      <div className="image_section_op">
        <div className="image_section_container">
          <div className="small_title">
              all you need to know
          </div>     
          <div className="big_title">
            <strong>ABOUT  </strong> 
            HARMONI
          </div>     
          <div className="image_section_list">
            
            <ul>
              <li className="list_home" onClick={goBack}><a href='#'>Home</a></li>
              <li className="list_about">about us</li>
            </ul>   
          </div>
        </div>
      </div>

    </div>

    <div className="our_management_section">
      <div className="management_container">
        <div className="section_title">
          <div className="section_small_title">
              WE ARE HARMONI
          </div>
          <div className="section_big_title">
            <strong>No.1 </strong>
            Events Management
          </div>
          <div className="managment_section_button">
            <button>GET STARTED!</button>
          </div>
         </div>
         <div className="management_item">
            <div className="item_title">
              <h3 className="item_title_text">
                Our Mission 

                </h3>
            </div>
            <div className="management_item_title">
              Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
            </div>
            <div className="management_item_title2">
              Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod.
            </div>
          </div>
          <div className="management_item">
            <div className="item_title">
              <h3 className="item_title_text">
                 Our Vission 

              </h3>
            </div> 
            <div className="management_item_title">
              Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
            </div>
            <div className="management_item_title2">
              Lorem ipsum dollor site amet the best consectuer adipiscing elites sed diam nonummy nibh euismod.
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
              HARMONI AWAED

            </div>
            <div className="awards_big_title">
              Our Winning <strong>Awards</strong>
            </div>
          </div>
          <div className="award_item_area">
            <span className="arrow_up">
              <FaChevronCircleUp />
            </span>
            <span className="arrow_down">
              <FaChevronCircleDown />
            </span>
            <div className="award_wrapper">
              {
                award.map(elem => (
                               
                  <div className="award_wrapper">
                    <div className="award_item">
                      <div className="award_content">
                        <div className="award_title">
                          <span className="award_date">
                            {elem.winDate}
                            </span>
                              {elem.winAward}
                        </div>
                        <div className="m-0">
                          {elem.title}
                        </div>
                      </div>
                    </div>
                  </div>
                            
                             ) )
                            }
                        </div>
          </div>
        </div>
       
      </div>
    </div>

    
    </>
    
  )
}

export default About
