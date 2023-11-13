import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getActorAge } from "@/src/app/functions/getActorAge";

export default function MediaLineItem({
  id,
  imagePath,
  mediaTitle,
  releaseDate,
  character,
  actorBirthday,
  mediaType,
}) {
  const linkUrl = mediaType === "movie" ? `/movie/${id}` : `/tv/${id}`;

  return (
    <Link href={linkUrl}>
      <div
        className="
      flex
      space-between
      w-80
      gap-3
      px-4
      py-4
      border-2
      border-sky-900
      bg-zinc-950 rounded-md
      hover:bg-zinc-900
      text-center
    "
      >
        <Image
          src={
            imagePath
              ? `https://image.tmdb.org/t/p/w200${imagePath}`
              : "/images/PlaceholderFilmPoster.jpg"
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
        grow
        flex-col
        items-center
        justify-center"
        >
          <Suspense fallback={<p>Loading media title...</p>}>
            <h2 className="text-blue-400 text-2xl py-2">{mediaTitle}</h2>
          </Suspense>
          {character && (
            <div className="flex gap-2">
              <h3> as </h3>
              <h3 className="text-pink-200">{character}</h3>
            </div>
          )}
          <Suspense fallback={<p>Loading actor age...</p>}>
            {getActorAge(actorBirthday, releaseDate)}
          </Suspense>
        </div>
      </div>
    </Link>
  );
}

MediaLineItem.defaultProps = {
  mediaTitle: "Media Title",
};
