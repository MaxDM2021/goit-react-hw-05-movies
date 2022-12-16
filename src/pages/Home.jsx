
import  MoviesApi  from 'fakeApi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Home = () => {

  const location = useLocation();
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    MoviesApi.fetchTrendDayMovies.then(setMovies);
  }, []);



  return (
    <main>
      {movies.length > 0 && (
        <>
        <h2>Tranding today</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
                - <Link to={`${movie.id}`} state={{ from: location}} >{movie.name}</Link></li>
          ))}
        </ul>
        </>
      )}
    </main>
  );
};

export default Home;
