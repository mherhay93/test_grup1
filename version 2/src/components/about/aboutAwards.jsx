import  {useAwardData}  from "../../context/aboutContext";
import { useTranslation } from 'react-i18next';



function AboutAward(){

  const { t } = useTranslation();


    const {award} = useAwardData()

 
    return (

        <>
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
        </>

    )

}

export default AboutAward