import "../styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <h1>
        <a href="https://github.com/sainnhe/everforest">Everforest</a>
      </h1>
      <nav className="Nav">
        <a href="/ports">Ports</a>
        <a href="/ports">Palettes</a>
        <button></button>
      </nav>
    </header>
  );
}

export default Header;
