import { ImSearch } from 'react-icons/im';
import 'components/Styles/styles.css';


export const SearchBox = ({ value, onChange, onForm }) => {
  return (
    <form onSubmit={onForm} className="SearchForm">
    <button type="submit" className="SearchForm-button">
    <ImSearch />
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      name="movieName"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      value={value}
      onChange={onChange}
    />
  </form>

  );
};





