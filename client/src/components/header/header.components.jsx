import "./header.styles.css";
import Logo from "../../assets/rtech 1.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from '../../components';

const Header = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
      
      <div className="header-right">
        {isAuthenticated && (
          <div className="profile-container">
            <img className="profile-pic" src={user.picture} alt="" />
          </div>
        )}
        {isAuthenticated && (
          <div className="button">
            <button onClick={() => logoutWithRedirect()}>Logout</button>
          </div>
        )}
        {!isAuthenticated && (
          <div className="button">
            <button onClick={() => loginWithRedirect()}>Sign In</button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
