import "./teacherProfile.styles.css";
import Rating from "../rating/rating.components";
const TeacherProfile = ({ Name, source }) => {
  return (
    <div className="teacher-profile">
      <div className="pro-bg-color">
      </div>
      <div className="profile-container">
        <div className="teacher-container">
          <img src={source} alt="" />
          <h2>{Name}</h2>
        </div>
        <Rating/> 
        <div className="input-div">
          <textarea type="text" placeholder="Enter your review" />
          <div className="button">
            <button>POST</button>
          </div>
        </div>
        <div className="meet-btn">
          <button className="call">Schedule Call</button>
          <button className="session">Schedule Session</button>
        </div>
        
      </div>
    </div>
  );
};

export default TeacherProfile;
