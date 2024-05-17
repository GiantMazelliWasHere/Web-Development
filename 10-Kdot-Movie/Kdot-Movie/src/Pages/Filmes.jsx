import { useEffect, useState } from "react";
import MovieCard from "../Componentes/MovieCard/MovieCard";

export default function Filmes() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setMovie(response.results))
    })
    
    return ( 
        <>
        <h1>Filmes</h1>
        <div className="grid grid-cols-3">
        {movie.map(filme => (
            <MovieCard key={filme.id} filme={filme} />
        ))}
        </div>
        </>
     );
}