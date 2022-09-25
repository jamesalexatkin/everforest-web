import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <h1 className="Title">
        <Link to="/">Everforest</Link>
      </h1>
      <nav className="Nav">
        <Link to="/apps">Apps</Link>
        <Link to="/palettes">Palettes</Link>
        <button></button>
      </nav>
    </header>
  );
}

export default Header;
