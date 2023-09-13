import Image from 'next/image';
import { Suspense } from 'react';
import { fetchActorData } from './fetchActorData';

export default async function ActorLineItem({ actor, releaseDate }) {
  const actorId = actor.id;
  console.log(`ActorId is ${actorId}:`);
  const actorDetails = await fetchActorData(actorId);
  console.log(`actorDetails is ${actorDetails}`);
  const getActorAge = (beeeeeeeerthday) => {
    console.log(`beeeeeeeerthday is ${beeeeeeeerthday}`);
    if (beeeeeeeerthday) {
      const birthday = new Date(actorDetails.birthday);
      const release = new Date(releaseDate);
      const age = release.getFullYear() - birthday.getFullYear();
      const monthDifference = release.getMonth() - birthday.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && release.getDate() < birthday.getDate())
      ) {
        return `Was ${age - 1}`;
      }
      return `Was ${age}`;
    } else {
      return 'Age unknown';
    }
  };

  return (
    <div
      className="
    flex grow gap-3 px-4 py-4 border-2 border-sky-500 bg-zinc-950 rounded-md hover:bg-zinc-900
    "
    >
      <Image
        src={
          actorDetails?.profile_path
            ? `https://image.tmdb.org/t/p/w200${actorDetails.profile_path}`
            : '/images/PlaceholderActor.jpg'
        }
        alt="Actor poster"
        width={100}
        height={100}
        layout="fixed"
        className="rounded-lg"
      />
      <div
        id="actor-image-name-character-and-age"
        className="flex flex-col items-center justify-center"
      >
        <Suspense fallback={<p>Loading actor name...</p>}>
          <h2 className="text-blue-400 text-xl">{actorDetails?.name}</h2>
        </Suspense>
        <div className="flex gap-2">
          <h3> as </h3>
          <h3 className="text-pink-200">{actor.character}</h3>
        </div>
        <Suspense fallback={<p>Loading actor age...</p>}>
          <h3>{getActorAge(actorDetails?.birthday)}</h3>
        </Suspense>
      </div>
    </div>
  );
}

ActorLineItem.defaultProps = {
  actor: 'Actor name',
  character: 'Character name',
  age: 'a curious number of',
};
