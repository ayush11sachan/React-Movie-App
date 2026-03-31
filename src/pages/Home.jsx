import { useState } from "react";
import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";
import "../styles/app.css";

function Home() {

  const [search, setSearch] = useState("");
  const {movies, loading} = useMovies(search);

  return (
    <div className="container">
        <h1>Movie Search App</h1>

        <div className="search-box">
            <input
                placeholder="Search movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

      {loading && <p>Loading...</p>}
      {!loading && movies.length === 0 && (
        <p>No movies found</p>
      )}

      <div className="movie-grid">

      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}

      </div>

    </div>
  );
}

export default Home;