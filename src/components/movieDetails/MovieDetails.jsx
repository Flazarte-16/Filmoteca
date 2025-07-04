import { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import "./MovieDetails.css";

export const MovieDetails = ({ type, id }) => {
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=51886a75b1af8dd9b4111b07e19d5c60&language=es-ES`
        );
        const data = await response.json();
        setMovieDetail(data);
      } catch (error) {
        console.error("Error al obtener detalles de la película", error);
      }
    };
    fetchDetails();
  }, [id, type]);

  return (
    <>
      <Navbar />
      <div className="movie-details-container">
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
    </>
  );
};
