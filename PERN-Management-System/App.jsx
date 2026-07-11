

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddEvent from "./pages/AddEvent";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Registrations from "./pages/Registrations";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-event" element={<AddEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;