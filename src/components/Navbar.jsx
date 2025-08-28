import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="src\assets\Logo.avif" className="logo" />
      <div className="nav-links">
        <Link to="/">Visits</Link>
        <Link to="/countries">Top Countries</Link>
        <Link to="/referrers">Referrers</Link>
      </div>
      <h1 className="log">A</h1>
    </nav>
  );
}

export default Navbar;
