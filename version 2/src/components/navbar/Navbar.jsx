import "./navbar.css";
import logo from "../../img/logo.png";
import { FaGlobe } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { disabl } from "../upperNav/UpperNav";

const Navbar = () => {
  console.log(disabl);
  return (
    
    <nav className="main-nav" style={{
      pointerEvents: disabl ? "none" : "initial",
    }}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </div>
      <div className="nav-social">
        <NavLink to="/admin">
          <RiAdminFill className="nav-logo" />
        </NavLink>
        <FaGlobe className="nav-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
