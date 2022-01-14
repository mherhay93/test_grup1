import './footer.css'
import logo from '../../img/logo.png'
import { FaFacebook,FaInstagram,FaYoutubeSquare,FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
     
        <div className="footer-social-links">
          <img src={logo} alt='logo'/>
          <div className="footer-social">
            <a href="#"><FaFacebook className='social-icon'/></a>
            <a href="#"><FaInstagram className='social-icon' /></a>
            <a href="#"><FaYoutubeSquare className='social-icon' /></a>
            <a href="#"><FaTwitter className='social-icon' /></a>
          </div>
         <p className="copy-right"> © Copyright 2022. All Rights Reserved.</p>
        </div>
      <div className="map-container">
        
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11501.839832500507!2d-78.8196662!3d43.8877396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6246b27630b5ff54!2sHarmony%20Event%20Centre!5e0!3m2!1shy!2s!4v1642005892187!5m2!1shy!2s" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
      </div>
      <div className="footer-event-links">
        <h2>Discover Events</h2>
        <li>Business Meeting</li>
        <li>Music Event</li>
        <li>Food Event</li>
        <li>Conference</li>
        <li>Exhibition</li>

      </div>
      <div className="footer-gallery">
        <h2>Coming Events</h2>
        
      </div>
    </footer>
      
    
  )
}

export default Footer
