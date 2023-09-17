import Image from "next/image";
import { Suspense } from "react";
import { getActorAge } from "@/src/app/functions/getActorAge";

export default function MediaLineItem({
  key,
  imagePath,
  mediaTitle,
  releaseDate,
  character,
  actorBirthday,
  mediaType,
}) {
  const handleOnClick = () => {
    if (mediaType === "movie") {
      // REDIRECT TO /movie/${Key}
    }
  };

  return (
    <div
      className="
      flex grow gap-3 px-4 py-4 border-2 border-sky-500 bg-zinc-950 rounded-md hover:bg-zinc-900
      "
      onClick={handleOnClick()}
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
        className="flex flex-col items-center justify-center"
      >
        <Suspense fallback={<p>Loading media title...</p>}>
          <h2 className="text-blue-400 text-xl">{mediaTitle}</h2>
        </Suspense>
        {character && (
          <div className="flex gap-2">
            <h3> as </h3>
            <h3 className="text-pink-200">{character}</h3>
          </div>
        )}
        <Suspense fallback={<p>Loading actor age...</p>}>
          <h3 className="text-pink-200">
            {getActorAge(actorBirthday, releaseDate)}
          </h3>
        </Suspense>
      </div>
    </div>
  );
}

MediaLineItem.defaultProps = {
  mediaTitle: "Media Title",
};
