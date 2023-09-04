import Image from "next/image";

export default function ActorLineItem(props) {
  return (
    <div
      className="
    flex grow gap-3 px-4 py-4 border-2 border-sky-500 bg-zinc-950 rounded-md hover:bg-zinc-900
    "
    >
      <Image
        src="/images/PlaceholderActor.jpg"
        alt="Actor poster"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div
        id="actor-image-name-character-and-age"
        className="flex flex-col items-center justify-center"
      >
        <h2 className="text-blue-400 text-xl">{props.actor}</h2>
        <div className="flex gap-2">
          <h3> as </h3>
          <h3 className="text-pink-200">{props.character}</h3>
        </div>
        <h3>Was {props.age} years old</h3>
      </div>
    </div>
  );
}

ActorLineItem.defaultProps = {
  actor: "Actor name",
  character: "Character name",
  age: "30",
};
