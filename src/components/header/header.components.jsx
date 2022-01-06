
import './header.styles.css'
import Logo from '../../assets/rtech 1.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <Link to='/'>
                    <img className='logo' src={Logo} alt="logo" />
                </Link>
            </div>
        </div>
    )
}
export default Header