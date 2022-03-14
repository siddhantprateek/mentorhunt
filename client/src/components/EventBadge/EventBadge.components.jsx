import './EventBadge.styles.css';
import { Button } from '../../components';
const EventBadge = () => {
  return (
    <div className='event-container'>
        <div className="event-thumbnail">
          
        </div>
        <div className="event-contents">
            <h1>Event 1</h1>
            <hr />
            <div className='event-props'>
                <p>Sat, June 12, 2022, 7:30 PM (IST)</p>             
                <p>Venue: Online</p>
                <p>Hosted by:</p>
            </div>
            <div className="event-schedule">
                <Button pholder="Join Event"/>
                <Button pholder="Book a Seat" color="green"/>
            </div>
        </div>
    </div>
  )
}

export default EventBadge;