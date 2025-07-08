import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ image, title, summary, genres, rating, id }) {
  return (
    <li>
      <Link to={`/movie/${id}`}>{title}</Link>({rating})<div>{summary}</div>
      <ul>
        {genres.map((genre, index) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <img src={image} alt={title} />
    </li>
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
