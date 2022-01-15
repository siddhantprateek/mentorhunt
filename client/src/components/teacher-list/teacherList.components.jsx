import './teacherList.styles.css';
import TeacherBadge from '../teacherBadege/teacherBadge.components';
import data from '../../assets/data.json';
const TeacherList = () => {
    return(
        <div className="teacher-list">
            {data.map((teacher) =>(
                <TeacherBadge name={teacher.Name} source={teacher.source} />
            ))}
        </div>
    )
}
export default TeacherList;