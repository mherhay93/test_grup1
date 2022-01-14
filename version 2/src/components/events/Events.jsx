import Event from './Event'
import Body from '../body/Body'
import Search from '../search/Search'
import './events.css'

const Events = () => {
  return (
    <>
       <Body />
      <Search />
      <section class="event-container">
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      </section>
    </>
 
  )
}

export default Events
