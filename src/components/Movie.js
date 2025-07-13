import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ image, title, summary, genres, rating, id }) {
  return (
    <div className={styles.movie}>
      <img src={image} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>({rating})
        </h2>
        <p>{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.prototypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default Movie;
