
import './header.styles.css';
import Logo from '../../assets/rtech 1.png';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { isAuthenticated, loginWithRedirect, logout} = useAuth0();

    const logoutWithRedirect = () =>
        logout({
            returnTo: window.location.origin,
    });
    return(
        <div className="">
            <header className='header-container'>
                <div className="logo">
                    <Link to='/'>
                        <img className='logo' src={Logo} alt="logo" />
                    </Link>
                </div>
  
                { isAuthenticated && (
                    <div className="button">
                        <button onClick={() => logoutWithRedirect()}>Logout</button>
                    </div>
                )}
                { !isAuthenticated && (
                    <div className="button">
                        <button onClick={() => loginWithRedirect()}>Sign In</button>
                    </div>
                )}
            </header>
        </div>
    )
}
export default Header