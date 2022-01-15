import './teacherProfile.styles.css';
const TeacherProfile = ({Name, source}) => {
    return(
        <div className="teacher-profile">
            <img src={source} alt="" />
            <h2>{Name}</h2>
        </div>
    )
}

export default TeacherProfile;