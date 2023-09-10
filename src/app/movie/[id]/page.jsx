import Image from "next/image";
import ActorLineItem from "@/components/ActorLineItem/ActorLineItem";
import { fetchMovieData } from "./fetchMovieData";

export default async function IdPage({params}) {
  const id = params.id;
  console.log(`Id is ${id}`);
  if (id) {
    const movieData = await fetchMovieData(id);
  }

  console.log("Rendering idPage");
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

// export async function getServerSideProps(context) {
//   const { params } = context;
//   console.log(`params.id is ${params.id}`);
//   const rubbishData = "fsvjdijfiodsfji";
//   try {
//     const movieData = await fetchMovieData(params.id);
//     console.log("Moviedata:");
//     console.log({ movieData });
//     return {
//       props: {
//         rubbishData,
//         movieData,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         rubbishData,
//         movieData: null,
//         error: "Failed to fetch movie data",
//       },
//     };
//   }
// }
