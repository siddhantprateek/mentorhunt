import './teacherBadge.styles.css';

const TeacherBadge = ({name, source}) => {
    return (
        <div className="teacher-badge">
            <div className="t-image">
                <img src={source} height='100px' alt="" />
            </div>
            <div className="badge-content">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default TeacherBadge;