import { useEffect, useState } from "react";
import "./MovieList.css";
import { Link } from "wouter";

export const MovieList = ({ type, query, setSelectedId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = "";
        if (query && query.trim() !== "") {
          url = `https://api.themoviedb.org/3/search/${type}?api_key=51886a75b1af8dd9b4111b07e19d5c60&language=es-ES&query=${query}`;
        } else {
          url = `https://api.themoviedb.org/3/discover/${type}?api_key=51886a75b1af8dd9b4111b07e19d5c60&language=es-ES`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error al cargar peliculas", error);
      }
    };
    fetchMovies();
  }, [type, query]);

  const handleMovieId = (id) => {
    setSelectedId(id);
    console.log(id);
  };

  return (
    <>
      <ul className="movie-list">
        {movies.map((movie) => (
          <>
            <li id="movie.id" className="movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-overlay">
                <h3>{movie.title}</h3>
                <p>⭐{movie.vote_average}</p>
                <Link href="/details">
                  <button onClick={() => handleMovieId(movie.id)}>
                    view more
                  </button>
                </Link>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
