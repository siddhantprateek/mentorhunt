import loading from "../../assets/loading.svg";
import './loader.style.css';
const Loading = () => (
  <div className="loader">
    <div className="spinner">
      <img src={loading} alt="Loading" />
    </div>
  </div>
);

export default Loading;
