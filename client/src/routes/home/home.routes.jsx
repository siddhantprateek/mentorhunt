import './home.styles.css';
import BgImg from '../../assets/home-bg.png'
const Home = () => {
    return(
        <div className="home">
            <div className="home-img">
                <img src={BgImg} alt="" />
            </div>
        </div>
    )
}
export default Home