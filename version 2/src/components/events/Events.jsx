import Event from './Event';
import Body from '../body/Body';
import Search from '../search/Search';
import './events.css';
import { useGlobalContext } from "../../context/EventContext";
import Loading from "../Loading";


const Events = () => {
   const { events, isLoading } = useGlobalContext()
  if (isLoading) {
   return <Loading />
 }
  return (
    <>
       <Body />
      <Search />
      <section className="event-container">
        {
        events && events.map(item =>  <Event key={item._id} {...item} />  )
        }
      
      </section>
    </>
 
  )
}

export default Events
