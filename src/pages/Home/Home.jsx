import { useEffect, useState } from 'react';
import { getTrending } from '../../api/api';
import { MovieList } from '../../components/MovieList/MovieList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const {
        data: { results },
      } = await getTrending();

      setTrendingMovies(results);
    };

    loadTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};
