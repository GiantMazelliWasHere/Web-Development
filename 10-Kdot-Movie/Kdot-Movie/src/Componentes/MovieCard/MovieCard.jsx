import {Link} from 'react-router-dom';

function MovieCard({filme}) {
    return ( 
        <div>
            <p>{filme.title}</p>
                <img src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`}/>
                {/* <img src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`}/> */}
                <Link to={`${filme.id}`}>Saiba Mais</Link>
        </div>
     );
}

export default MovieCard;