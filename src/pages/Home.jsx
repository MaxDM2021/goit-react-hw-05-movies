import { fetchTrendDayMovies } from 'fakeApi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const list = await fetchTrendDayMovies();
      setMovies(list);
    })();
  }, []);

  // useEffect(() => {
  //   fetchTrendDayMovies().then(setMovies);
  // }, []);

  console.log(movies);

  return (
    <main>
      {movies.length > 0 && (
        <>
          <h2>Tranding today</h2>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Home;

