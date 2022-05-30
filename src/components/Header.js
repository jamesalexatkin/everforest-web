import "../styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <h1 className="Title">
        <a href="https://github.com/sainnhe/everforest">Everforest</a>
      </h1>
      <nav className="Nav">
        <a className="NavLink" href="/apps">
          Apps
        </a>
        <a className="NavLink" href="/palettes">
          Palettes
        </a>
        <button></button>
      </nav>
    </header>
  );
}

export default Header;
