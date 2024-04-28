import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { getMovieDetails } from '../../api/api';
import css from './MovieDetails.module.css';
import { Thumb } from '../../components/Thumb/Thumb';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loadMovieDetails = async () => {
      setIsError(false);
      try {
        const { data } = await getMovieDetails(movieId);

        setMovieDetails(data);
      } catch (e) {
        setIsError(true);
        setMovieDetails(null);
      }
    };

    loadMovieDetails();
  }, [movieId]);

  const formatScore = score => `${Math.round(score * 10)}%`;

  return (
    <div>
      <div className={css.container}>
        {isError && <h2>Failed to load movie details</h2>}

        <div>
          <Link to={location.state ? location.state : '/'}>Go back</Link>
        </div>

        {movieDetails && (
          <>
            <div className={css.details}>
              <Thumb imageId={movieDetails.poster_path} />
              <div className={css.info}>
                <h1>{movieDetails.original_title}</h1>
                <div>User score: {formatScore(movieDetails.vote_average)}</div>
                <h3>Overview</h3>
                <div>{movieDetails.overview}</div>
                <h3>Genres</h3>
                <div>
                  <ul className={css.genres}>
                    {movieDetails.genres.map(item => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <hr />
            <div>Additional information</div>
            <ul>
              <li>
                <Link to="cast" state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={location.state}>
                  Reviews
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
