import Image from "next/image";
import ActorLineItem from "@/components/ActorLineItem/ActorLineItem";
import { fetchMovieData } from "./fetchMovieData";
import { fetchCreditsData } from "./fetchCreditsData";

let movieData = {
  poster_path: "/images/PlaceholderFilmPoster.png",
};

let creditsData = {};

export default async function IdPage({ params }) {
  const id = params.id;
  console.log(`Id is ${id}`);
  if (id) {
    console.log("Hi there, there's an id");
    movieData = await fetchMovieData(id);
    creditsData = await fetchCreditsData(id);
  }

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const firstTwentyCastResults = creditsData.cast.slice(0, 20);
  console.log({ firstTwentyCastResults });

  console.log("Rendering idPage");
  return (
    <>
      <div
        id="film-title-poster-and-title"
        className="flex items-center py-7 px-8 gap-5"
      >
        <div id="film-title-poster">
          <Image
            // src="/images/PlaceholderFilmPoster.png"
            src={`https://image.tmdb.org/t/p/w200/${movieData.poster_path}`}
            alt="Film poster"
            width={200}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div id="film-title" className="flex flex-col items-center">
          <h2 className="text-blue-400 text-xl">{movieData.title}</h2>
          <h3 className="text-pink-200">
            {" "}
            {new Date(movieData.release_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h3>
          <h3 className="text-pink-200">{movieData.runtime} mins</h3>
          <h3 className="text-pink-200">
            {" "}
            {movieData.genres.map((genre) => genre.name).join(", ")}
          </h3>
        </div>
      </div>
      <div
        id="actors-list"
        className="
      flex flex-col items-center py-5 px-5 gap-5 border-t-2"
      >
        {firstTwentyCastResults.map((actor) => (
          <ActorLineItem key={actor.id} actor={actor} />
        ))}
      </div>
    </>
  );
}
