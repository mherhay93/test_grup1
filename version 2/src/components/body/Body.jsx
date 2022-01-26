import {useState} from 'react'
import './body.css'
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useGlobalContext } from '../../context/EventContext';

const Body = () => {
  const [currentImg, setCurrentImg] = useState(0)
  const { events } = useGlobalContext()
  
   const nextSlideHandler =()=>{
   setCurrentImg(currentImg === events.length -1  ? 0 : currentImg + 1)
 }
 const prevSlideHandler = () =>{
  setCurrentImg(currentImg === 0 ? events.length -1 : currentImg - 1)
 }
  return (
      <section className="main-hero" style={{ backgroundImage: `url(${events[currentImg].picture})` }} >
        <div className="hero-container">
          <h1>{ events[currentImg].title}</h1>
          <div className="hero-info">
             {/* <h2 >One Stop</h2> */}
             <h2>Event planner</h2>
           </div>
        <div className='arrow left'
           onClick ={prevSlideHandler}
        >
           <AiFillLeftCircle  />
        </div>
        <div className='arrow right'
         onClick = {nextSlideHandler}
        >
          <AiFillRightCircle />
         </div>
        </div>
         <ul className="input-container">
            {events.map((item,index)=>(
              <li key={item._id}>
                <input type="radio" name="slide" value={currentImg} onClick={() =>{
                 setCurrentImg(index)
                 }} checked={currentImg === index} /> 
              </li>  
               ))}
           </ul>
         </section>
  )
}

export default Body
