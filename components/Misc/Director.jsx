import { fetchActorData } from "../ActorLineItem/fetchActorData";
import { getActorAge } from "@/src/app/functions/getActorAge";

export default async function DirectorDetails({ id, releaseDate }) {
  if (!id) {
    return <p>NO IDEA WHO THE DIRECTOR IS MATE</p>;
  }

  const DirectorDetails = await fetchActorData(id);
  const birthday = DirectorDetails?.birthday
    ? new Date(DirectorDetails?.birthday)
    : null;
  const directorName = DirectorDetails?.name ?? "some wiseguy";

  return (
    <h3 className="text-pink-200 break-normal">
      Directed by {directorName}, who {getActorAge(birthday, releaseDate)}
    </h3>
  );
}
