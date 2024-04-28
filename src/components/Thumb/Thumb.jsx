import css from './Thumb.module.css';

const baseImageUrl = 'https://image.tmdb.org/t/p';
const defaultImage =
  'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

const allowedWidth = {
  w300: 300,
  w92: 92,
};

export const Thumb = ({ imageId, imageSize = 'w300' }) => (
  <img
    className={css.poster}
    width={allowedWidth[imageSize]}
    src={imageId ? `${baseImageUrl}/${imageSize}/${imageId}` : defaultImage}
    alt={imageId}
  />
);
