'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { getActorAge } from '@/src/app/functions/getActorAge';
import { useState } from 'react';

export default function MediaLineItem({
  id,
  imagePath,
  mediaTitle,
  releaseDate,
  tvFirstAirDate,
  tvLastAirDate,
  character,
  actorBirthday,
  mediaType,
}) {
  const linkUrl = mediaType === 'movie' ? `/movie/${id}` : `/tv/${id}`;

  const [loading, setLoading] = useState(false);

  const handleOnClick = () => {
    setLoading(true);
    window.location.href = `${linkUrl}`;
  };

  return (
    <div
      id="MediaLineItemOuterContainer"
      className="
        relative
        flex
        space-between
        w-80
        gap-3
        px-4
        py-4
        h-full
        bg-gradient-to-b from-rose-200 via-indigo-100 to-violet-200
        hover:bg-zinc-900
        rounded-xl
        text-center
        fade-edges
        overflow-auto
        cursor-pointer
      "
      onClick={handleOnClick}
    >
      {!loading && (
        <>
          <p
            id="media-year-text"
            style={{ position: 'absolute', top: 0, left: 0 }}
            className="
                px-2
                pt-1
                text-blue-600
                bg-pink-200
                rounded-br-xl
                border-r-1 border-b-1 border-pink-200
                "
          >
            {releaseDate && releaseDate.slice(0, 4)}
            {tvFirstAirDate && tvFirstAirDate.slice(0, 4)}
          </p>
          <Image
            src={
              imagePath
                ? `https://image.tmdb.org/t/p/w200${imagePath}`
                : '/images/PlaceholderFilmPoster.png'
            }
            alt="Media poster"
            width={100}
            height={100}
            layout="fixed"
            className="rounded-lg"
          />
          <div
            id="media-title"
            className="
          flex 
          flex-col
          items-center
          justify-center
          bottom-5
          left-0
          right-0
          mx-auto
          py-2
          px-2
          w-10/12
          rounded-lg
          shadow-2xl
          backdrop-blur-sm
          backdrop-opacity-80
          backdrop-contrast-200
          backdrop-brightness-50
          bg-gradient-to-b
          from-transparent
          to-black
        "
          >
            <Suspense fallback={<p>Loading media title...</p>}>
              <h2 className="text-blue-300 text-2xl py-2">{mediaTitle}</h2>
            </Suspense>
            {character && (
              <div className="flex gap-2">
                <h3> as </h3>
                <h3 className="text-pink-200">{character}</h3>
              </div>
            )}
            <Suspense fallback={<p>Loading actor age...</p>}>
              <div className="text-rose-200">
                {getActorAge(
                  actorBirthday,
                  releaseDate,
                  tvFirstAirDate,
                  tvLastAirDate
                )}
              </div>
              <p>{id}</p>
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
          style={{ height: '155px' }}
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
    </div>
  );
}

MediaLineItem.defaultProps = {
  mediaTitle: 'Media Title',
};
