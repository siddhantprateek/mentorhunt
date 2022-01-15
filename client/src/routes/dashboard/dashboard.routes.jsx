import TeacherList from '../../components/teacher-list/teacherList.components';
import './dashboard.style.css';

const Dashboard = () => {
    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
     
            <TeacherList />
        </div>
    )
}
export default Dashboard