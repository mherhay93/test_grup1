import './navbar.css'
import logo from '../../img/logo.png'
import { FaGlobe } from "react-icons/fa";
import {Link} from 'react-router-dom' 

const Navbar = () => {
  return (
    <nav className="main-nav">
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className="nav-links">
        <li>
           <Link to='/'>Home</Link>
           </li>
        <li>
           <Link to='/about'>About</Link>
           </li>
        <li>
           <Link to='/events'>Events</Link>
           </li>
        <li>
           <Link to='/contacts'>Contacts</Link>
           </li>
        </div>
        <div className="nav-social">
       
        <FaGlobe className='nav-logo' />
        </div>
      </nav>
  )
}

export default Navbar
