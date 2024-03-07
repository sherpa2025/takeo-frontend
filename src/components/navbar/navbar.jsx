import { Link } from "react-router-dom";
import world from "../../assets/countries.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="topnav">
      <div>
        <Link to="/" className="nav-link">
          <img src={world} className="nav-img" />
        </Link>
      </div>
      <div>
        <input type="text" placeholder="Search Country.." />
      </div>
    </div>
  );
}

export default Navbar;
