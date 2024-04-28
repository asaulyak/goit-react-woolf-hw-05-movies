import { instance } from './constants';

export const getTrending = () => instance('/trending/all/day');

export const searchMovies = (query, page = 1) =>
  instance(`/search/movie?include_adult=false&query=${query}&page=${page}`);

export const getMovieDetails = movieId => instance(`/movie/${movieId}`);

export const getMovieCredits = movieId => instance(`/movie/${movieId}/credits`);

export const getMovieReviews = movieId => instance(`/movie/${movieId}/reviews`);
