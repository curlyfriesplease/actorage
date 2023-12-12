'use client';

import Image from 'next/image';
import { Suspense } from 'react';
import { getActorAge } from '@/src/app/functions/getActorAge';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ActorLineItem({
  actor,
  releaseDate,
  tvFirstAirDate,
  tvLastAirDate,
}) {
  const birthday = actor?.birthday ? new Date(actor?.birthday) : null;
  const deathday = actor?.deathday;
  const isTVactor = actor?.total_episode_count;

  const [loading, setLoading] = useState(false);

  const handleOnClick = () => {
    setLoading(true);
    window.location.href = `/actor/${actor.id}`;
  };

  return (
    <motion.div
      id="ActorLineItemOuterContainer"
      className="
      container 
      relative
      justify-center
      items-center
      text-center
      w-60
      max-w-350
      h-[21rem]
      min-h-full
      h-full
      gap-4
      px-4
      py-4
      bg-gradient-to-b from-rose-200 via-indigo-100 to-violet-200
      rounded-xl
      shadow-2xl
      hover:bg-zinc-700
      fade-edges
      overflow-auto
      cursor-pointer
    "
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.7 }}
      initial={{ opacity: 0, rotate: -25 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1.5, type: 'spring', bounce: 0.7 }}
      onClick={handleOnClick}
    >
      {!loading && (
        <>
          <div
            id="actorImageContainer"
            className="
        h-full
        w-full
        static
        "
            style={{ position: 'relative' }}
          >
            {tvFirstAirDate && (
              <p
                id="tv-seasons-text"
                style={{ position: 'absolute', top: 0, left: 0 }}
                className="
                px-2
                text-blue-600
                bg-gradient-to-b
                from-pink-200
                to-blue-300
                rounded-br-xl
                border-r-4 border-b-4 border-pink-200
                "
              >
                {actor.seasonNumbersText}
              </p>
            )}

            <Image
              src={
                actor?.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : '/images/PlaceholderActor.png'
              }
              alt="Actor poster"
              width={208}
              height={312}
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
          bg-gradient-to-b
          from-transparent
          to-black
          "
          >
            <Suspense fallback={<p>Loading actor name...</p>}>
              <h2 className="text-blue-200 text-xl">{actor?.name}</h2>
            </Suspense>
            <div className="flex gap-2 text-sm">
              <h3>as</h3>
              <h3 className="text-pink-300 break-normal m-0 p-0">
                {actor.character || actor.roles[0].character}
              </h3>
            </div>
            <Suspense fallback={<p>Loading actor age...</p>}>
              <div
                className="
            text-rose-200
            bg-gradient-to-b
            from-transparent
            to-blackx
            py-1
            px-3
            rounded-full
            backdrop-opacity-10
            "
              >
                {getActorAge(
                  birthday,
                  releaseDate,
                  tvFirstAirDate,
                  tvLastAirDate,
                  deathday
                )}
              </div>
            </Suspense>
          </div>
        </>
      )}
      {loading && (
        <div
          id="loading-spinner-container"
          className="
          flex
          justify-center
          w-full
          "
          style={{ height: '311px' }}
        >
          <Image
            src="/images/LoadingEclipse.gif"
            alt="Loading"
            layout="fill"
            objectFit="contain"
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      )}
    </motion.div>
  );
}

ActorLineItem.defaultProps = {
  actor: 'Actor name',
  character: 'Character name',
  age: 'a curious number of',
};
