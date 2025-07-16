import { useEffect, useState } from "react";
import "./MovieDetails.css";

export const MovieDetails = ({ type, selectedId }) => {
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${selectedId}?api_key=51886a75b1af8dd9b4111b07e19d5c60&language=es-ES`
        );
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        console.error("Error al obtener detalles de la película", error);
      }
    };
    fetchDetails();
  }, [selectedId, type]);

  return (
    <>
      <div className="movie-details-container">
        <a href="./" className="returnButton">
          <ion-icon name="arrow-undo"></ion-icon>
        </a>
        <div className="movie-details-content">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="movie-details-poster"
          />
          <div className="movie-details-info">
            <h3 className="movie-details-title">
              {movieDetail.title || movieDetail.name}
            </h3>
            <p className="movie-details-overview">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
      <footer>
        <h2>Filmoteca</h2>
        <p>@ 2025 Filmoteca. Todos los derechos reservados</p>
      </footer>
    </>
  );
};
