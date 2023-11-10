import Image from "next/image";
import { Suspense } from "react";
import { fetchActorData } from "./fetchActorData";
import { getActorAge } from "@/src/app/functions/getActorAge";

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

  return (
    <div
      className="
    flex 
    flex-col 
    items-center
    max-w-xs
    grow
    gap-3
    px-4
    py-4
    border-2
    border-sky-500
    bg-zinc-950
    rounded-md
    hover:bg-zinc-900
    "
    >
      <Image
        src={
          actorDetails?.profile_path
            ? `https://image.tmdb.org/t/p/w200${actorDetails.profile_path}`
            : "/images/PlaceholderActor.jpg"
        }
        alt="Actor poster"
        width={150}
        height={150}
        layout="fixed"
        className="rounded-lg"
      />
      <div
        id="actor-image-name-character-and-age"
        className="flex flex-col items-center justify-center"
      >
        <Suspense fallback={<p>Loading actor name...</p>}>
          <h2 className="text-blue-400 text-2xl">{actorDetails?.name}</h2>
        </Suspense>
        <div className="flex gap-2">
          <h3> as </h3>
          <h3 className="text-pink-200 break-normal">{actor.character}</h3>
        </div>
        <Suspense fallback={<p>Loading actor age...</p>}>
          <h3 className="text-pink-200 text-3xl">
            {getActorAge(birthday, releaseDate, tvFirstAirDate, tvLastAirDate)}
          </h3>
        </Suspense>
      </div>
    </div>
  );
}

ActorLineItem.defaultProps = {
  actor: "Actor name",
  character: "Character name",
  age: "a curious number of",
};
