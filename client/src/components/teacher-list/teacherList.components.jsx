import './teacherList.styles.css';
import TeacherBadge from '../teacherBadege/teacherBadge.components';

const TeacherList = ({teacher}) => {
    return(
        <div className="teacher-list">
            {teacher.map((data) =>(
                <a href={`/t/${data.Name.replaceAll(" ", "")}`}>
                    <TeacherBadge name={data.Name} source={data.source} />
                </a>
            ))}
        </div>
    )
}
export default TeacherList;