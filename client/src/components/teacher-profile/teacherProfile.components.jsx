import "./teacherProfile.styles.css";
import Rating from "../rating/rating.components";
const TeacherProfile = ({ Name, source }) => {
  return (
    <div className="teacher-profile">
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
    </div>
  );
};

export default TeacherProfile;
