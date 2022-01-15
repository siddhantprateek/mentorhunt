import Error404 from '../../assets/24.png';
import './nomatch.styles.css';

const Nomatch = () => {
    return(
        <div className="no-match">
            <img src={Error404} alt="" />
        </div>
    )
}
export default Nomatch;