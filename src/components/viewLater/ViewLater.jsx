import { useEffect, useState } from "react";
import "./viewLater.css";
export const ViewLater = () => {
  const [viewLater, setViewLater] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("movies")) || [];
    setViewLater(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(viewLater));
  }, [viewLater]);

  const handleDelete = (index) => {
    setViewLater(viewLater.filter((_, i) => i !== index));
  };

  return (
    <div className="peliculas-container">
      <div className="peliculas-guardadas">
        <a href="./" className="returnButton">
          <ion-icon name="arrow-undo"></ion-icon>
        </a>
        <h2>Peliculas Guardadas </h2>
        <ul className="lista-peliculas">
          {viewLater.map((m, i) => (
            <li key={i} className="item-pelicula">
              {m.title}
              <button onClick={() => handleDelete(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
