import { useState } from "react";
import MovieCard from "./MovieCard";

function MovieTest() {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const searchMovies = async () => {

    if (!search) return;

    setLoading(true);
    setError("");

    try {

      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
      );

      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("No movies found");
      }

    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div style={{
        textAlign: "center",
        padding: "20px"
    }}>
        <h1>Movie App</h1>

      <input
        placeholder="Search movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
            if (e.key == "Enter") searchMovies();
        }}
        style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc"
        }}
      />

      <button onClick={searchMovies}
        style={{
            padding: "10px 20px",
            marginLeft: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#ff4b2b",
            color: "white",
            cursor: "pointer"
        }}
      >
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{color:"red"}}>{error}</p>}

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>

      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}

      </div>

    </div>
  );
}

export default MovieTest;