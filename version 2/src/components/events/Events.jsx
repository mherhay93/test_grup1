import Event from "./Event";
import Body from "../body/Body";
import Search from "../search/Search";
import "./events.css";
import { useGlobalContext } from "../../context/EventContext";
import Loading from "../Loading";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const Events = () => {

  const { t } = useTranslation();

  const { events, isLoading } = useGlobalContext();
  const [noOfElement, setnoOfElement] = useState(9)

  const showMore = () => {
    setnoOfElement(noOfElement + 9)
  }

  const showLess = () => {
    setnoOfElement(noOfElement - 9)
  }
 

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Body />
      <Search />
      <section className="event-container">
        {
          events &&  events.slice(0, noOfElement).map(item =>  <Event key={item._id} {...item} />  )
        }
        <div className="more_less_buttons"> 
          {noOfElement < events.length && <button onClick={showMore} className='moreEvents'>{t("Show More")}</button>}
          {noOfElement > 9 && <button onClick={showLess} className='moreEvents'>{t("Show Less")}</button>}
        </div>
    
      </section>
    </>
  );
};

export default Events;
