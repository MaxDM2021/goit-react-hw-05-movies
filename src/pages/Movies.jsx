import { toast } from 'react-toastify';

import { SearchBox } from 'components/SearchBox';
import { fetchMovieQuery } from 'fakeApi';
import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();

  const [movieName, setName] = useState('');
  const [movies, setMovies] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = query => {
    if (query.trim() === '') {
      return toast.error('Введите название изображения!');
    }
    setName(query);
  };

  useEffect(() => {
    if (movieName) {
      fetchMovieQuery(movieName).then(setMovies);
    }
  }, [movieName]);

  // Как работает useEffect: Если hitName изменятся, запустятся все фунции вложенные в useEffect

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} movie={movie}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
