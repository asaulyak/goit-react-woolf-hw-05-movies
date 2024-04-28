import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api/api';
import { useParams } from 'react-router-dom';
import { Review } from '../../components/Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const loadReviews = async () => {
      const {
        data: { results },
      } = await getMovieReviews(movieId);

      setReviews(results);
    };

    loadReviews();
  }, [movieId]);

  return (
    <>
      {reviews?.length ? (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <Review review={review} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};
export default Reviews;
