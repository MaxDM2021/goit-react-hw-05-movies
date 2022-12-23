import { fetchTrendDayMovies, API_IMG, DEF_IMG } from 'fakeApi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '../components/Box';
import "../components/Styles/styles.css"

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
        <Box backgroundColor="#403f9d36" >
          <Box as="h2" textAlign="center" padding="15px" color='#08080836' >Tranding today</Box>
          <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center">
            {movies.map(movie => (
              <Box as="li" key={movie.id}  margin="10px" >
                <Link className="item" to={`/movies/${movie.id}`} state={{ from: location }}>
                  <Box as="img" src={movie.poster_path ? API_IMG + movie.poster_path : DEF_IMG} alt={movie.title} width="400" borderRadius="10px" marginBottom="20px"/>
                  {movie.title}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </main>
  );
};

export default Home;

