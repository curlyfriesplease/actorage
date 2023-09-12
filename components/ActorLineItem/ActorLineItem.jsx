import Image from "next/image";

export default function ActorLineItem(actor) {
  return (
    <div
      className="
    flex grow gap-3 px-4 py-4 border-2 border-sky-500 bg-zinc-950 rounded-md hover:bg-zinc-900
    "
    >
      <Image
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : "/images/PlaceholderActor.png"
        }
        alt="Actor poster"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div
        id="actor-image-name-character-and-age"
        className="flex flex-col items-center justify-center"
      >
        <h2 className="text-blue-400 text-xl">{actor.name}</h2>
        <div className="flex gap-2">
          <h3> as </h3>
          <h3 className="text-pink-200">{actor.character}</h3>
        </div>
        <h3>Was x years old</h3>
      </div>
    </div>
  );
}

ActorLineItem.defaultProps = {
  actor: "Actor name",
  character: "Character name",
  age: "a curious number of",
};
