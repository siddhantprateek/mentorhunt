import './home.styles.css';
import BgImg from '../../assets/home-bg.png';
import { useAuth0 } from '@auth0/auth0-react';
const Home = () => {
    const { loginWithRedirect } = useAuth0();
    return(
        <div className="home">
            <div className="home-content">
                <div className="content">
                    <h1>Learn Simpler.</h1>
                    <h3>A simple solution to find the best teacher at your University.</h3>
                    <div className="btn">
                        <button placeholder='' onClick={() => loginWithRedirect()}>Sign Up</button>
                    </div>
                </div>
                <img src={BgImg} alt="" />
            </div>
            <div className="about-section">
                <h1>About</h1>
                <hr />
                <p>Schedule and Connect with your domain specific Mentors.</p>
            </div>
            <div className="ui-image-container">
                <div className="image-section">
                    <div className='ui-contents'>
                        <h2>Get Mentored from your favorite teacher.</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home