import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm
                    <img src={LogoTitle} alt="developer"/>
                    avanna
                    <br/>
                    web developer
                </h1>
                <h2>Junior FrontEnd Developer / Gaming Hobbyist / Curious Explorer</h2>
                <Link className='flat-button' to='/contact'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home;