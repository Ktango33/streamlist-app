import React, { useState, useEffect } from "react";

const API_KEY = "eb250e9f95fa9da241f9a5792527f018";

function Movies() {
  // Initialize searchTerm from localStorage or empty string
  const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem("searchTerm") || "";
  });

  const [movies, setMovies] = useState([]);

  // Save searchTerm to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          searchTerm
        )}`
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="movies">
      <h2>Search Movies</h2>
      <form onSubmit={handleSearch} className="input-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-results">
        {movies.length === 0 && <p>No results found.</p>}
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div className="no-image">No Image</div>
            )}
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>
                <strong>Release Date:</strong>{" "}
                {movie.release_date || "N/A"}
              </p>
              <p>{movie.overview || "No description available."}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;