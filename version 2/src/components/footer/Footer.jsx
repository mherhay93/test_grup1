import './footer.css'
import logo from '../../img/1.site-logo.png'
import {FaFacebook, FaInstagram, FaYoutubeSquare, FaTwitter} from "react-icons/fa";
import {AiFillPhone} from "react-icons/ai";
import {BsFillEnvelopeFill} from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5"
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-social-links">
                <img src={logo} alt='logo'/>
                <div className="footer-social">
                    <a href="#" className="icons-social"><FaFacebook className='social-icon'/></a>
                    <a href="#" className="icons-social"><FaInstagram className='social-icon'/></a>
                    <a href="#" className="icons-social"><FaYoutubeSquare className='social-icon'/></a>
                    <a href="#" className="icons-social"><FaTwitter className='social-icon'/></a>
                </div>
                <p className="copy-right"> © Copyright 2022. All Rights Reserved.</p>
            </div>
            <div className="links-to-nav">
                <li className="lists-footer">
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className="lists-footer">
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className="lists-footer">
                    <NavLink to='/events'>Events</NavLink>
                </li>
                <li className="lists-footer">
                    <NavLink to='/contacts'>Contacts</NavLink>
                </li>
            </div>
            <div className="contact">
                <a href="#" className="contact-footer-icon">
                    <div className="contact-icon-back-footer">
                        <IoLocationSharp className="location-icon-footer contact-icon"/>
                    </div>
                    <span className="contact-info-footer infos">Armenia,Erevan</span>
                </a>
                <a href="#" className="contact-footer-icon">
                    <div className="contact-icon-back-footer">
                        <BsFillEnvelopeFill className="message-icon-footer contact-icon"/>
                    </div>
                    <span className="contact-mail-footer infos">info@Harmoni.com</span>
                </a>
                <a href="#" className="contact-footer-icon">
                    <div className="contact-icon-back-footer">
                        <AiFillPhone className="phone-icon-footer contact-icon"/>
                    </div>
                    <span className="contact-number-footer infos">10-2222-9999</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer
