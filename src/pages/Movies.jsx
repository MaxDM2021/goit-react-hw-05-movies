import { toast } from 'react-toastify';

import { SearchBox } from 'components/SearchBox';
import { fetchMovieQuery } from 'fakeApi';
import { useEffect, useState } from 'react';

import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { Suspense } from 'react';

const Movies = () => {
  const location = useLocation();

  const [movieName, setName] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const valueMovieName = searchParams.get('name') ?? '';
  const histori = window.location.search.split('=')[1];

  useEffect(() => {
    if (!movieName && !histori) {
      return;
    }
    if (!movieName) {
      getFetchQuery(histori);
      return;
    }

    getFetchQuery(movieName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieName]);

  const getFetchQuery = async e => {
    const data = await fetchMovieQuery(e);

    setMovies(data);
  };

  const handleSubmit = query => {
    if (query.trim() === '') {
      return toast.error('Введите название изображения!');
    }
    setName(query);
  };

  useEffect(() => {
    (async () => {
      if (movieName) {
        const result = await fetchMovieQuery(movieName);
        setMovies(result);
      }
    })();
  }, [movieName]);

  // useEffect(() => {
  //   if (movieName) {
  //     fetchMovieQuery(movieName).then(setMovies);
  //   }
  // }, [movieName]);

  // Как работает useEffect: Если hitName изменятся, запустятся все фунции вложенные в useEffect

  const onChange = name => {
    const nextValueName = name !== '' ? { name } : {};
    setSearchParams(nextValueName);
  };

  return (
    <main>
      <SearchBox
        onSubmit={handleSubmit}
        onChange={onChange}
        value={valueMovieName}
      />
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} movie={movie}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
