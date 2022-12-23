import { fetchMovieByCredit, API_IMG, DEF_IMG } from 'fakeApi';
import { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';


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
          <ul>
            {casts.map( ({id, profile_path, name, character}) => (
              <li key={id}>
                <img src={profile_path ? API_IMG + profile_path : DEF_IMG} alt={name} width="150" />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
          </ul>
    </main>
  );
};

export default Cast;