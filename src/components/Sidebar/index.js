import './index.scss';
import { Link, NavLink } from 'react-router-dom';

import LogoY from '../../assets/images/logo-s.png'
import LogoYohanes from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    <div className='nav-bar'>
        <Link calssNmae='logo' to="/" >
            <img src={LogoY} alt='YLogo' />
            <img className="subLogo" src={LogoYohanes} alt='yohanes' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" 
            className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" 
            className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target='_blank' 
                rel="noreferrer"
                href='https://www.linkedin.com/in/yohanes-tesfaye-7b0b3b1b4/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
            </li>

            <li>
                <a 
                target='_blank' 
                rel="noreferrer"
                href='https://www.facebook.com/yohanes.tesfaye.9'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
            </a>
            
            </li>

            <li>
                <a 
                target='_blank' 
                rel="noreferrer"
                href='https://www.github.com'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
            
            </li>
        </ul>


        </div>
}


export default Sidebar;