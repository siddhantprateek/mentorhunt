import './home.styles.css';
import BgImg from '../../assets/home-bg.png'
const Home = () => {
    return(
        <div className="home">
            <h1>Home</h1>
            <img src={BgImg} alt="" />
        </div>
    )
}
export default Home