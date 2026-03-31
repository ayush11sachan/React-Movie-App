import { useState, useEffect } from "react";

function useMovies(query) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

    useEffect(() => {
        if (!query) return;

        const timer = setTimeout (async () => {
            setLoading(true);
            setError("");

                try{
                    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);

                    const data =  await res.json();

                    if (data.Response === "True"){
                        setMovies(data.Search);
                    }else{
                        setMovies([]);
                    }
                }catch(err){
                    setError("Something went wrong");
                }

            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [query]);

    return {movies, loading};
}

export default useMovies;