import { fetchMovieByCredit, API_IMG, DEF_IMG } from 'fakeApi';
import { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';

import { Box } from '../components/Box';


const Cast = () => {

  // const location = useLocation();

const { movieId } = useParams();
const [casts, setCast] = useState([]);
const params = useParams()


console.log(params)



useEffect(() => {
    (async () => {
      const list = await fetchMovieByCredit(movieId);
      setCast(list);
    })();
  }, [movieId]);


// const backLinkHref = location.state?.from ?? '/movies';


  return (
    <main>
         <h2>Our lovely Actors</h2>
          <Box as="ul" display="flex" flexWrap="wrap" justifyContent="spase-between">
            {casts.map( ({id, profile_path, name, character}) => (
              <Box as="li" key={id}   margin="10px" >
                <Box as="img" src={profile_path ? API_IMG + profile_path : DEF_IMG} alt={name} width="250" borderRadius="10px"/>
                <p>{name}</p>
                <p>{character}</p>
              </Box>
            ))}
          </Box>
    </main>
  );
};

export default Cast;
