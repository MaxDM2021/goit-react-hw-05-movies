import { SearchBox } from 'components/SearchBox';
import { getMovieQuery } from 'fakeApi';
import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';


const Movies = () => {

  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    getMovieQuery.then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };


  const visibleCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [customers, filterParam]);

  return (
    <main>
      <SearchBox value={filterParam} onChange={changeFilter} />
      {customers.length > 0 && (
        <ul>
          {visibleCustomers.map(customer => (
            <li key={customer.id}>
                <Link to={`${customer.id}`} state={{ from: location}} >{customer.name}</Link></li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
