export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Student Event Management System</h1>
        <p>
          Manage events, registrations and student participation
          through a modern web application.
        </p>
      </div>

      <div className="stats">
        <div className="stat-box">
          <h2>12</h2>
          <p>Total Events</p>
        </div>

        <div className="stat-box">
          <h2>85</h2>
          <p>Registrations</p>
        </div>

        <div className="stat-box">
          <h2>50</h2>
          <p>Students</p>
        </div>
      </div>
    </div>
  );
}