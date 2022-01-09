
import './header.styles.css'
import Logo from '../../assets/rtech 1.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return(
        <div className="">
            <header className='header-container'>

                <div className="logo">
                    <Link to='/'>
                        <img className='logo' src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="button">
                    <button>Logout</button>
                </div>
            </header>
        </div>
    )
}
export default Header