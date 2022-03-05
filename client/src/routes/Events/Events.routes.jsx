import './Events.styles.css';
import { Button, EventBadge } from '../../components';

const Events = () => {
  return (
    <div className="event-page">
        <h1>Events</h1>
        <Button pholder="Create Event" color="blue"/>

        <EventBadge />
        <EventBadge />
        <EventBadge />

    </div>
  )
}

export default Events;