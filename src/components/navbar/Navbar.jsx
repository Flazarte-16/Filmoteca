import "./Navbar.css";

export const Navbar = ({ onSelectType, setQuery, type }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Filmoteca</h1>
      <ul className="nav-links">
        <a className="nav-item" href="./">
          Home
        </a>
        <li className="nav-item" onClick={() => onSelectType("movie")}>
          Movies
        </li>
        <li className="nav-item" onClick={() => onSelectType("tv")}>
          Series
        </li>
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
