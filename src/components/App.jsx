import { lazy, useEffect } from 'react';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getTrending,
  searchMovies,
} from '../api/api';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  useEffect(() => {
    getTrending();
    searchMovies('clockwork orange');
    getMovieDetails(185);
    getMovieCredits(185);
    getMovieReviews(185);
  }, []);

  return (
    <div  style={{
      height: '100vh',
      color: '#010101'
    }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
