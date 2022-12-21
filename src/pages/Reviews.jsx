import { fetchMovieByReviews } from 'fakeApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
         <h2>Reviews</h2>
          <ul>
            {reviews.map(({id, author, content}) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
    </main>
  );
};

export default Reviews;
