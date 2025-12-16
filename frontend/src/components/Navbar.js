import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItem = (label, path) => (
    <li
      className={location.pathname === path ? "active" : ""}
      onClick={() => navigate(path)}
    >
      {label}
    </li>
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        Edgemont Academy
      </div>

      <ul className="navbar-links">
        {navItem("Home", "/")}
        {navItem("Our Mission", "/mission")}
        {navItem("Teachers", "/teachers")}
        {navItem("Courses", "/courses")}
        {navItem("Events", "/events")}
        {navItem("Transparency", "/transparency")}
        {navItem("About", "/about")}
      </ul>
    </nav>
  );
}

export default Navbar;
