import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const data = await response.json();
    setMovies(data.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <>
          <h2>Movies</h2>
          <ol>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                image={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
                url={movie.url}
              />
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default Home;
