

import { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios
      .get("http://localhost:5000/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">
      <h1>Events</h1>

      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        events.map((event) => (
          <div className="event-card" key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.event_date}</p>

            <button
              className="delete-btn"
              onClick={() => deleteEvent(event.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Events;