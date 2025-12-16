import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Transparency from "./pages/Transparency";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
