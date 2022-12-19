import { toast } from 'react-toastify';

import { SearchBox } from 'components/SearchBox';
import { fetchMovieQuery } from 'fakeApi';
import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();

  const [movieName, setName] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  console.log(movieName)

  const [total, setTotal] = useState(0);

  function handleNameChange (event)  {
    setName(event.target.value.toLowerCase());
    
   
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movieName.trim() === '') {
      return toast.error('Введите название изображения!');
    }
    setPage(1);
    setName(event.target.value.toLowerCase());
    setName('');
  
  };


//   const handleSubmit = (event) => {
//     event.preventDefault();

//        if (movieName.trim() === '') {
//       return toast.error('Введите название изображения!');
//     }

//     setName(event.target.name.value.toLowerCase().trim());
//     setPage(1);
//     setName('');
// }

// const handleNameChange =(name)=> {
//     const nextParams = name !== '' ? { name } : {};
//     setSearchParams(nextParams);
// }

  useEffect(() => {
    if (movieName) {
    fetchMovieQuery(movieName, page, total).then(setMovies);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, movieName]);

  // Как работает useEffect: Если hitName изменятся, запустятся все фунции вложенные в useEffect

  useEffect(() => {
    setMovies([]);
    setTotal(0);
  }, [movieName]);

  return (
    <main>
      <SearchBox
        value={movieName}
        onChange={handleNameChange}
        onForm={handleSubmit}
      />
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} movie={movie}>
              <Link to={`${movie.id}`} state={{ from: location }  }>
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

// const Movies = () => {

//   const location = useLocation();
//   const [movies, setCustomers] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const filterParam = searchParams.get('filter') ?? '';

//   useEffect(() => {
//     fetchMovieQuery().then(setCustomers);
//   }, []);

//   const changeFilter = value => {
//     setSearchParams(value !== '' ? { filter: value } : {});
//   };

//   const visiblemovies = useMemo(() => {
//     return movies.filter(movie =>
//       movie.title.toLowerCase().includes(filterParam.toLowerCase())
//     );
//   }, [movies, filterParam]);

//   return (
//     <main>
//       <SearchBox value={filterParam} onChange={changeFilter} />
//       {movies.length > 0 && (
//         <ul>
//           {visiblemovies.map(movie => (
//             <li key={movie.id}>
//                 <Link to={`${movie.id}`} state={{ from: location}} >{.name}</Link></li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// };

// export default Movies;
