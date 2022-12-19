import { ImSearch } from 'react-icons/im';
import 'components/Styles/styles.css';


export const SearchBox = ({ onSubmit }) => {

  const onSubmitForm=(e)=>{
    e.preventDefault();
    onSubmit(e.target.elements.movieName.value);
    e.target.reset()
  }

  return (
    <form onSubmit={onSubmitForm} className="SearchForm">
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
    />
  </form>

  );
};





