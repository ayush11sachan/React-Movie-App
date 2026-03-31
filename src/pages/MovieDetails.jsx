import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function MovieDetails() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

    const fetchMovieDetails = async () => {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await response.json();

        setMovie(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    if(loading) return <h2>Loading...</h2>;

    return(
        <div style={{textAlign:"center", padding: "20px"}}>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>{movie.Title}</h1>
        
            <img
                src={movie.Poster}
                alt={movie.Title}
                style={{width:"250px", borderRadius:"10px"}}
            />

            <p><b>Year:</b> {movie.Year}</p>
            <p><b>Genre:</b> {movie.Genre}</p>
            <p><b>IMDB Rating:</b> ⭐ {movie.imdbRating}</p>
            <p><b>Plot:</b> {movie.Plot}</p>
        </div>
     );
}

export default MovieDetails;