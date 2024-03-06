import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        <h1 className="nav-header">Todo App </h1>
      </Link>
      <div className="line">
        <hr />
      </div>
    </div>
  );
}

export default Navbar;
