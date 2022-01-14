import logoHeader from "../assets/images/1.site-logo.png";

import ContactUsForm from "../contactUsForm/index.jsx";

import './index.css'

function Header() {


  return (
    <header className="header">
      <nav>
        <img className="header_img" src={logoHeader} alt="image logo"title="Harmoni events" />
        <ul className="header-nav">
          <li className="header-nav-li">HOME</li>
          <li className="header-nav-li">ABOUT</li>
          <li className="header-nav-li">EVENTS</li>
          <li className="header-nav-li">BLOGS</li>
          <li className="header-nav-li">GALERY</li>
          <li className="header-nav-li">SPAKER</li>
          <li className="header-nav-li" onClick={()=>window.open(<ContactUsForm/>)}>CONTACT</li>
        </ul>
        <ul className="header-icons">
          <li className="fa-user">
            <i></i>
          </li>
          <li className="fa-search">
            <i></i>
          </li>
        </ul>
      </nav>
      <div className="header-slideShow">
        <div className="header-slideShow-info">
          <p>One Stop</p>
          <p>Event Planner</p>
          <p>EVERY EVENT SOULD BE PRRFECT</p>
          <div className="header-slideShow-buttons">
            <button>ABOUT US</button>
            <button>GET STARTED!</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
