import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="title">
        <Link to="/">Everforest</Link>
      </h1>
      <nav className="nav">
        <Link to="/apps">Apps</Link>
        <Link to="/palettes">Palettes</Link>
        <button></button>
      </nav>
    </header>
  );
}

export default Header;
