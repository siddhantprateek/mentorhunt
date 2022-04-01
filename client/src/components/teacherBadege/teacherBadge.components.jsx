import './teacherBadge.styles.css';
import { Rating } from '@mui/material';
import { useState } from 'react';
const TeacherBadge = ({name, source}) => {
    const [ rate, setRate ] = useState(0);
    return (
        <div className="teacher-badge">
            <div className="badge-bg">
            </div>
            <div className="badge-container">
                <div className="t-image">
                    <img src={source} height='100px' alt="" />
                </div>
                <div className="badge-content">
                    <h3>{name}</h3>
                </div>
            </div>
            <hr/>
            <div className='rating-container'>
                <Rating
                    value={rate}
                    onChange={(e, newValue) => setRate(newValue)}
                />
            </div>
            <div className="meet-btn badge-btn">
              <button className="view-pro">View Profile</button>
            </div>
        </div>
    )
}

export default TeacherBadge;