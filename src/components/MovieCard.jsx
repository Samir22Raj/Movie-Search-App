import { useMovieContext } from "../contexts/MovieContext";
import { customRound } from "../utils/customRound";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/MovieCard.css";

function MovieCard({ movie, ratingFunc }) {
    // console.log(movie);
    
  const rating = customRound(movie.vote_average / 2);
  const { isFavorite, addFavorites, removeFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) removeFavorites(movie.id);
    else addFavorites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <div className="movie-info-text">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
        <div className="item_rating">
          {ratingFunc && ratingFunc({ rating })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
