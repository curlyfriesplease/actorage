import { fetchActorData } from '../ActorLineItem/fetchActorData';
import { getActorAge } from '@/src/app/functions/getActorAge';

export default function DirectorDetails({ id, releaseDate, directorDetails }) {
  if (!id) {
    return <p>NO IDEA WHO THE DIRECTOR IS MATE</p>;
  }

  const birthday = directorDetails?.birthday
    ? new Date(directorDetails?.birthday)
    : null;
  const directorName = directorDetails?.name ?? 'some wiseguy';
  return (
    <>
      <h3
        className="
        text-pink-500 
        break-normal           
        md:text-lg
        text-base 
        font-semibold"
      >
        Director {directorName}
      </h3>{' '}
      <div className="
      text-pink-500 
      font-semibold
      ">
        {getActorAge(birthday, releaseDate)}
      </div>
    </>
  );
}
