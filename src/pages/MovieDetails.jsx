import { fetchMovieByID, API_IMG } from 'fakeApi';
import { useState, useEffect, Suspense } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '../components/Box';
import { BsFillEmojiSunglassesFill, BsBookHalf } from 'react-icons/bs';

const detailsItems = [
  { href: 'cast', text: 'Cast', icon: BsFillEmojiSunglassesFill },
  { href: 'reviews', text: 'Reviews', icon: BsBookHalf },
];

const DetailsItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
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
  // const dataRelease = String(release_date).slice(0, 4);

  const backLinkHref = location.state?.from ?? '/movies';

  // console.log(location.state.from);

  return (
    <main>
      <Link to={backLinkHref}>Back to movies</Link>
      <>
        <img src={API_IMG + poster_path} alt={title} width="300" />
        <p>{title}</p>
        <p>Overview: {overview}</p>
        <p>
          Genres:
          {genres &&
            genres.map(
              (genre, i, array) =>
                `${genre.name} ${array.length - 1 === i ? '' : ', '}`
            )}
        </p>
        <p>Data release: {new Date(release_date.created).toLocaleDateString()}</p>
        <div>
          <Box as="nav" display="flex">
            {detailsItems.map(({ href, text, icon: Icon }) => (
              <DetailsItem to={href} key={href}>
                <Icon size="16" />
                {text}
              </DetailsItem>
            ))}
          </Box>
        </div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </>
    </main>
  );
};

export default MovieDetails;

// A state={{from: location}}

// B location.state.from
// state ={{from: location.state.from}}

// C location.state.from
