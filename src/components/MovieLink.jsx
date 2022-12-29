// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import MovieListSCSS from './MovieList.module.scss';

export const MovieLink = ({ movie }) => {
  const location = useLocation();
  const url = location.pathname === '/' ? `movies/` : '';

  return (
    <li className={MovieListSCSS.item}>
      <Link to={`${url}${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
    </li>
  );
};
