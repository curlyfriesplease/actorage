import Image from "next/image";
import ActorLineItem from "@/components/ActorLineItem/ActorLineItem";
import { fetchMovieData } from "./fetchMovieData";

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(`params.id is ${params.id}`);
  try {
    const movieData = await fetchMovieData(params.id);
    console.dir({ movieData });
    return {
      props: {
        movieData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movieData: null,
        error: "Failed to fetch movie data",
      },
    };
  }
}

export default function idPage({ movieData }) {
  if (!movieData) {
    return <div>Failed to fetch movie data</div>;
  }
  console.log("OH NO");
  return (
    <>
      <div
        id="film-title-poster-and-title"
        className="flex items-center py-7 px-8 gap-5"
      >
        <div id="film-title-poster">
          <Image
            src="/images/PlaceholderFilmPoster.png"
            alt="Film poster"
            width={200}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div id="film-title" className="flex flex-col items-center">
          <h1>ID no: {movieData.id}</h1>
          <h2 className="text-blue-400 text-xl">{movieData.title}</h2>
          <h3 className="text-pink-200">{movieData.release_date}</h3>
          <h3 className="text-pink-200">{movieData.rating}</h3>
          <h3 className="text-pink-200">{movieData.runtime}</h3>
          <h3 className="text-pink-200">{movieData.genres}</h3>
        </div>
      </div>
      <div
        id="actors-list"
        className="
      flex flex-col items-center py-5 px-5 gap-5 border-t-2"
      >
        <ActorLineItem />
        <ActorLineItem />
        <ActorLineItem />
      </div>
    </>
  );
}
