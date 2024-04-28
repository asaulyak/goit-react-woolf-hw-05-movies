import { MovieList } from '../../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../api/api';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cleanQuery = searchParams.get('query')?.trim();

    const loadMovies = async () => {
      if (cleanQuery) {
        const {
          data: { results },
        } = await searchMovies(cleanQuery);

        setMovies(results);
      } else {
        setMovies([]);
      }
    };

    loadMovies();
  }, [searchParams]);

  return (
    <div>
      <SearchBar />

      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
