import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faYoutube} from '@fortawesome/free-brands-svg-icons/faYoutube';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='Logo'/>
            <p className='sub-logo sub-savanna'>Savanna</p>
               {/* <img className='sub-logo' src={LogoSubtitle} alt='Savanna'/> */}
        </Link>
        <nav>
            <NavLink
                exact='true'
                activeclassname='active'
                to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink
                exact='true'
                activeclassname='active'
                className='about-link'
                to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink
                exact='true'
                activeclassname='active'
                className='contact-link'
                to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://no.linkedin.com/in/siljeangelvik'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/siljeangelvik'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.youtube.com/@its_zavanna'
                >
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.instagram.com/siljeaangelvik/'
                >
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;