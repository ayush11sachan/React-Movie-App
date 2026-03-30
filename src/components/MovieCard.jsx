function MovieCard({movie}){
    return(
        <div style={{
            width: "200px",
            margin: "15px",
            padding: "10px",
            borderRadius: "10px",
            background: "#1e1e1e",
            color: "white",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            transition: "0.3s",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
        }}
        >
            <img src={movie.Poster != "N/A" ? movie.Poster : "https://via.placeholder.com/200"} alt={movie.Title} style={{width:"100%", borderRadius: "10px"}}/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    )
}

export default MovieCard;