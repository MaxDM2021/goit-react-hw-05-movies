import { fetchMovieByID } from 'fakeApi';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieByID(Number(movieId)).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { id, title, poster_path, release_date, overview, genres } = movie;
  const dataRelease = String(release_date).slice(0, 4);

  const backLinkHref = location.state?.from ?? '/movies';

  console.log(location.state.from);

  return (
    <main>
      <Link to={backLinkHref}>Back to movies</Link>
      <>
      <img src={poster_path} alt={title} />
      <p>id: {id}</p>
      <p>{title}</p>
      <p>Overview: {overview}</p>
      <p>
        Genres:
        {genres &&
          genres.map(
            (genre, i, arr) =>
              `${genre.name} ${arr.length - 1 === i ? '' : ', '}`
          )}
      </p>
      <p>Data release: {dataRelease}</p>
      </>
    </main>
  );
};

export default MovieDetails;

// A state={{from: location}}

// B location.state.from
// state ={{from: location.state.from}}

// C location.state.from
