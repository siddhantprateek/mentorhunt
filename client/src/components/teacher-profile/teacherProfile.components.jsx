import './teacherProfile.styles.css';
const TeacherProfile = ({Name, source}) => {
    return(
        <div className="teacher-profile">
            <div className="teacher-container">
                <img src={source} alt="" />
                <h2>{Name}</h2>
            </div>
            <div className="input-div">
            <input 
                type="text" 
                placeholder='Enter your review'
                />
            </div>
        </div>
    )
}

export default TeacherProfile;