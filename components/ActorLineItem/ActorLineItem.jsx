import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { fetchActorData } from './fetchActorData';
import { getActorAge } from '@/src/app/functions/getActorAge';

export default async function ActorLineItem({
  actor,
  releaseDate,
  tvFirstAirDate,
  tvLastAirDate,
}) {
  const actorId = actor.id;
  console.log(`ActorId is ${actorId}:`);
  const actorDetails = await fetchActorData(actorId);
  const birthday = actorDetails?.birthday
    ? new Date(actorDetails?.birthday)
    : null;
  const deathday = actorDetails?.deathday;

  return (
    <Link href={`/actor/${actor.id}`}>
      <div
        id="ActorLineItemOuterContainer"
        className="
      container 
      relative
      justify-center
      items-center
      text-center
      w-60
      max-w-350
      h-full
      gap-4
      px-4
      py-4
      bg-zinc-950
      rounded-xl
      hover:bg-zinc-900
      fade-edges
      overflow-auto
    "
      >
        <div
          id="actorImageContainer"
          className="
        h-full
        w-full
        static
        "
        >
          <Image
            src={
              actorDetails?.profile_path
                ? `https://image.tmdb.org/t/p/w200${actorDetails.profile_path}`
                : '/images/PlaceholderActor.jpg'
            }
            alt="Actor poster"
            width={150}
            height={150}
            layout="responsive"
            className="
          rounded-lg 
          "
          />
        </div>
        <div
          id="actor-name-character-and-age"
          className="
          flex 
          flex-col
          items-center
          justify-center
          absolute
          bottom-5
          left-0
          right-0
          mx-auto
          py-2
          px-2
          w-10/12
          rounded-lg
          backdrop-blur-sm
          backdrop-opacity-80
          backdrop-contrast-200
          backdrop-brightness-50
          "
        >
          <Suspense fallback={<p>Loading actor name...</p>}>
            <h2 className="text-blue-200 text-2xl">{actorDetails?.name}</h2>
          </Suspense>
          <div className="flex gap-2">
            <h3> as </h3>
            <h3 className="text-pink-200 break-normal m-0 p-0">
              {actor.character}
            </h3>
          </div>
          <Suspense fallback={<p>Loading actor age...</p>}>
            {getActorAge(
              birthday,
              releaseDate,
              tvFirstAirDate,
              tvLastAirDate,
              deathday
            )}
          </Suspense>
        </div>
      </div>
    </Link>
  );
}

ActorLineItem.defaultProps = {
  actor: 'Actor name',
  character: 'Character name',
  age: 'a curious number of',
};
