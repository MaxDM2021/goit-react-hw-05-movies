import { ImSearch } from 'react-icons/im';
import 'components/Styles/styles.css';

export const SearchBox = ({value, onSubmit, onChange }) => {
  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(e.target.elements.movieName.value);
    e.target.reset();
  };

  return (
    <form id="search-form" onSubmit={onSubmitForm} className="SearchForm">
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
        onChange={event => onChange(event.target.value.toLowerCase())}
        value={value}
      />
    </form>
  );
};
