import { fetchMovieByID, API_IMG } from 'fakeApi';
import { useState, useEffect, Suspense } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '../components/Box';
import { BsFillEmojiSunglassesFill, BsBookHalf } from 'react-icons/bs';
import '../components/Styles/styles.css'

const detailsItems = [
  { href: 'cast', text: 'Cast', icon: BsFillEmojiSunglassesFill },
  { href: 'reviews', text: 'Reviews', icon: BsBookHalf },
];

const DetailsItem = styled(Link)`
display: flex;
justify-content: center;

font-family:Verdana, Geneva, Tahoma, sans-serif
gap: ${p => p.theme.space[3]}px;
padding: ${p => p.theme.space[3]}px;
border-radius: 4px;
text-decoration: none;
font-size: 18px;
margin-top="20px";
margin-right="20px";
color:  hsl(232, 9%, 50%);
&.active {
  
  color: ${p => p.theme.colors.white};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  
}
:hover:not(.active),
:focus-visible:not(.active) {
  background-color: hsl(232, 9%, 50%);
  color: ${p => p.theme.colors.white};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  useEffect(() => {
    (async () => {
      const movieInfo = await fetchMovieByID(Number(movieId));
      setMovie(movieInfo);
    })();
  }, [movieId]);

  //   useEffect(() => {
  //     fetchMovieByID(Number(movieId)).then(setMovie);
  //   }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, poster_path, release_date, overview, genres } = movie;
  const dataRelease = `${String(release_date).slice(8, 10)}. ${String(
    release_date
  ).slice(5, 7)}. ${String(release_date).slice(0, 4)}`;

  const backLinkHref = location.state?.from ?? '/movies';

  // console.log(location.state.from);

  return (
    <Box backgroundColor="#403f9d36">
      <DetailsItem to={backLinkHref}>Back to movies</DetailsItem>
      <Box display="flex" margin="20px">
       
          <Box 
            as="img"
            src={API_IMG + poster_path}
            alt={title}
            width="400"
            height="600px"
            borderRadius="10px"
            marginBottom="20px"
            marginTop="20px"
          />
           <Box display="flex" flexDirection="column" margin="20px" width="600px">
          <h2 className="titleMovie">{title}</h2>
          <p className="title"><span className="secondTitle"> Overview </span>: {overview}</p>
          <p className="title"> <span className="secondTitle">Genres </span>:
            {genres &&
              genres.map(
                (genre, i, array) =>
                  `${genre.name} ${array.length - 1 === i ? '' : ', '}`
              )}
          </p>
          <p className="title"> <span className="secondTitle">Data release</span>:  {dataRelease}</p>
          <div>
            <Box as="nav" display="flex" marginBottom="20px">
              { detailsItems.map(({ href, text, icon: Icon }) => (
                <DetailsItem
                  to={href}
                  key={href}
                  state={{ from: location.state.from }}
                >
                  <Icon className='icon' size="16" />
                  {text}
                </DetailsItem>
              ))}
            </Box>
          </div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;

// A state={{from: location}}

// B location.state.from
// state ={{from: location.state.from}}

// C location.state.from
