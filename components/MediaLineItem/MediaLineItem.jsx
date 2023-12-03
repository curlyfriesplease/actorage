import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { getActorAge } from '@/src/app/functions/getActorAge';

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

  return (
    <Link href={linkUrl}>
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
      "
      >
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
          backdrop-blur-sm
          backdrop-opacity-80
          backdrop-contrast-200
          backdrop-brightness-50
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
          </Suspense>
        </div>
      </div>
    </Link>
  );
}

MediaLineItem.defaultProps = {
  mediaTitle: 'Media Title',
};
