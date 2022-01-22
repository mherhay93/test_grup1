import "./navbar.css";
import logo from "../../img/logo.png";
import Translate from '../translation/appTranslation';
import { useState } from 'react';

import { FaGlobe } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';



const Navbar = () => {
  
  const { t } = useTranslation();

   const [ show, setShow ] = useState(false);

   function showHide() {
      setShow(!show)
   }
  
  return (
    <nav className="main-nav">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <li>
          <NavLink to="/">{t("Home")}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{t("About")}</NavLink>
        </li>
        <li>
          <NavLink to="/events">{t("Events")}</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">{t("Contacts")}</NavLink>
        </li>
      </div>
      <div className="nav-social">
        <NavLink to="/admin">
          <RiAdminFill className="nav-logo" />
        </NavLink>
        <FaGlobe className="nav-logo" onClick={showHide}/>
        {show && <Translate />}
      </div>
    </nav>
  );
};

export default Navbar;
