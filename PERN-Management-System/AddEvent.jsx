import { useState } from "react";
import axios from "axios";

function AddEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [event_date, setEventDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/events",
      {
        title,
        description,
        event_date,
      }
    );

    alert("Event Added");
  };

  return (
    <div className="page">
      <h1>Add Event</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setEventDate(e.target.value)}
        />

        <button type="submit">
          Add Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;