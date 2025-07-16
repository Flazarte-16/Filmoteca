import "./Navbar.css";

export const Navbar = ({ onSelectType, setQuery, type }) => {
  return (
    <nav className="navbar">
      <a className="logo" href="./">
        Filmoteca
      </a>
      <ul className="nav-links">
        <li className="nav-item" onClick={() => onSelectType("movie")}>
          Movies
        </li>
        <li className="nav-item" onClick={() => onSelectType("tv")}>
          TV
        </li>
        <a href="/viewLater" className="nav-item">
          View Later
        </a>
      </ul>
      <input
        className="search-input"
        type="text"
        placeholder={type === "movie" ? "Search Movie" : "Search Series"}
        onChange={(e) => setQuery(e.target.value)}
      />
    </nav>
  );
};
