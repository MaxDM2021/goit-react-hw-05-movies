import { toast } from 'react-toastify';

import { SearchBox } from 'components/SearchBox';
import { fetchMovieQuery, API_IMG, DEF_IMG  } from 'fakeApi';
import { useEffect, useState } from 'react';

import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { Suspense } from 'react';

import "../components/Styles/styles.css";
import { Box } from '../components/Box';

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
    < Box backgroundColor="#403f9d36" >
      <SearchBox
        onSubmit={handleSubmit}
        onChange={onChange}
        value={valueMovieName}
      />
      {movies.length > 0 && (
        <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center">
          {movies.map(movie => (
            <Box as="li" key={movie.id}  movie={movie}  margin="10px" >
              <Link to={`/movies/${movie.id}`} state={{ from: location }} className="item" >
              <Box as="img" src={movie.poster_path ? API_IMG + movie.poster_path : DEF_IMG} alt={movie.title} width="400" borderRadius="10px" marginBottom="20px"/>
                {movie.title}
              </Link>
            </Box>
          ))}
        </Box>
      )}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box >
  );
};

export default Movies;
