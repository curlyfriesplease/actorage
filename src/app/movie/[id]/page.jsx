import Image from "next/image";
import ActorLineItem from "@/components/ActorLineItem/ActorLineItem";
import { fetchMovieData } from "./fetchMovieData";
import { fetchCreditsData } from "./fetchCreditsData";
import DirectorDetails from "@/components/Misc/Director";

let movieData = {
  poster_path: "/images/PlaceholderFilmPoster.png",
};

let creditsData = {};
let directorId;

function getDirectorId(crew) {
  console.log("WHADDUP");
  for (const crewMember of crew) {
    if (crewMember.job === "Director") {
      return crewMember.id;
    }
  }
  return null;
}

export default async function IdPage({ params }) {
  const id = params.id;
  console.log(`Id is ${id}`);
  if (id) {
    console.log("Hi there, there's a movie id");
    movieData = await fetchMovieData(id);
    creditsData = await fetchCreditsData(id);
    directorId = await getDirectorId(creditsData.crew);
  }

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const firstTwentyCastResults = creditsData.cast.slice(0, 20);

  const dateString = movieData.release_date;
  const date = new Date(dateString);
  const formattedDate = (date) => {
    if (isNaN(date)) {
      // The date is invalid.
      console.log("The date is invalid.");
      return " ";
    } else {
      console.log("hey buddy");
      return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
  };
  return (
    <>
      <div
        id="film-title-poster-and-title"
        className="
        flex 
        items-center
        justify-center
        text-center
        py-7
        px-8
        gap-5
        border-2
        border-sky-500"
      >
        <div id="film-title-poster" className="px-4">
          <Image
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movieData.poster_path}`
                : "/images/PlaceholderFilmPoster.png"
            }
            alt="Film poster"
            width={200}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div id="film-title" className="flex flex-col items-center">
          <h2 id="movie-year" className="text-blue-400 text-5xl py-2">
            {movieData.title}
          </h2>
          <h3 className="text-pink-200 py-2">
            {movieData.genres.map((genre) => genre.name).join(", ")},&nbsp;
            {movieData.runtime} mins{" "}
          </h3>
          <DirectorDetails
            id={directorId}
            releaseDate={movieData.release_date}
          />
          <h3 className="text-pink-200 text-xl py-5">
            {`At the time of release ${formattedDate(date)}`}

            {":"}
          </h3>
        </div>
      </div>
      <div
        id="actors-list"
        className="
          flex
          justify-center
          flex-row
          flex-wrap
          items-center
          py-5
          px-5
          gap-5
          border-t-2"
      >
        {firstTwentyCastResults.map((actor) => (
          <ActorLineItem
            key={actor.id}
            actor={actor}
            releaseDate={movieData.release_date}
          />
        ))}
      </div>
    </>
  );
}
