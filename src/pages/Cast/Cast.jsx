import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../api/api';
import { Actor } from '../../components/Actor/Actor';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const loadCast = async () => {
      const {
        data: { cast: castList },
      } = await getMovieCredits(movieId);

      setCast(castList);
    };

    loadCast();
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul className={css.actors}>
          {cast.map(item => (
            <li key={item.id}>
              <Actor actor={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cast;
