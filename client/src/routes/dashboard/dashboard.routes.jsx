import TeacherList from '../../components/teacher-list/teacherList.components';
import './dashboard.style.css';
import { useState } from 'react';
import data from '../../assets/data.json';
const Dashboard = () => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value);
    }
    const filterTeacher = data.filter( teacher => 
        teacher.Name.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="input-div">
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder='Search ....' />
            </div>
            <TeacherList teacher={filterTeacher}/>
        </div>
    )
}
export default Dashboard