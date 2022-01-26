import Event from './Event';
import Body from '../body/Body';
import Search from '../search/Search';
import './events.css';
import { useGlobalContext } from "../../context/EventContext";
import Loading from "../Loading";
import { useState } from 'react';


const Events = () => {
   const { events, isLoading } = useGlobalContext()
  const [noOfElement, setnoOfElement] = useState(9)


  const showMore = () => {
    setnoOfElement(noOfElement + 9)
  }

  
  const showLess = () => {
    setnoOfElement(noOfElement - 9)
  }
 

  console.log(noOfElement)

  if (isLoading) {
   return <Loading />
 }
  return (
    <>
       <Body />
      <Search />
      <section className="event-container">
        {
        events &&  events.slice(0, noOfElement).map(item =>  <Event key={item._id} {...item} />  )
        }
        {noOfElement < events.length && <button onClick={showMore} className='moreEvents'>Show More</button>}
        {noOfElement > 9 && <button onClick={showLess} className='moreEvents'>Show Less</button>}
        
      
      </section>
    </>
 
  )
}

export default Events
