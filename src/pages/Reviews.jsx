import { fetchMovieByReviews } from 'fakeApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../components/Styles/styles.css'


const Reviews = () => {

const { movieId } = useParams();
const [reviews, setCast] = useState([]);
const params = useParams()


console.log(params)

useEffect(() => {
    (async () => {
      const listReviews = await fetchMovieByReviews(movieId);
      setCast(listReviews);
    })();
  }, [movieId]);


// const backLinkHref = location.state?.from ?? '/movies/:movieId';


  return (
    <main>
      {reviews.length !== 0 ? ( 
      <><h2 className="title">Reviews:</h2>
          <ul>
            {reviews.map(({id, author, content}) => (
              <li key={id}>
                <h3 className="title">{author}</h3>
                <p className="title"> {content}</p>
              </li>
            ))}
          </ul>
          </>) : (<h3>Reviews are missing </h3>) }

    </main>
  );
};

export default Reviews;
