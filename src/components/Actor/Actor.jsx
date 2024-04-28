import { Thumb } from '../Thumb/Thumb';

export const Actor = ({ actor }) => {
  return (
    <>
      <Thumb imageId={actor.profile_path} imageSize="w92" />
      <div>{actor.name}</div>
      <div>Character: {actor.character}</div>
    </>
  );
};
