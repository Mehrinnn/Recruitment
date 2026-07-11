import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2 className="logo"> Student Event Manager</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/registrations">Registrations</Link>
        <Link to="/about">About</Link>
        <Link to="/add-event">Add Event</Link>
      </div>
    </nav>
  );
}

export default Navbar;