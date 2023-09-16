import Image from 'next/image';
import ActorLineItem from '@/components/ActorLineItem/ActorLineItem';
import { fetchTvData } from './fetchTvData';
import { fetchCreditsData } from './fetchCreditsData';

let tvData = {
  poster_path: '/images/PlaceholderFilmPoster.png',
};

let creditsData = {};
let firstTwentyCastResults = {};

export default async function IdPage({ params }) {
  const id = params.id;
  console.log(`Id is ${id}`);
  if (id) {
    console.log("Hi there, there's a tv id");
    tvData = await fetchTvData(id);
    creditsData = await fetchCreditsData(id);
    firstTwentyCastResults = creditsData.cast.slice(0, 20);
  }

  if (!tvData) {
    return <div className="text-pink-400">Loading...</div>;
  }

  return (
    <>
      <div
        id="tv-title-poster-and-title"
        className="flex items-center py-7 px-8 gap-5"
      >
        <div id="tv-title-poster">
          <Image
            src={
              tvData.poster_path
                ? `https://image.tmdb.org/t/p/w200/${tvData.poster_path}`
                : '/images/PlaceholderFilmPoster.png'
            }
            alt="Tv show poster"
            width={200}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div id="tv-title" className="flex flex-col items-center">
          <h2 className="text-blue-400 text-xl">{tvData.original_name}</h2>
          <h3 className="text-pink-200">
            {' '}
            {tvData?.first_air_date?.slice(0, 4)} -{' '}
            {tvData?.last_air_date
              ? tvData?.last_air_date.slice(0, 4)
              : 'present'}
          </h3>
          <h3 className="text-pink-200">{tvData.number_of_seasons} Seasons</h3>
        </div>
      </div>
      <div
        id="actors-list"
        className="
      flex flex-col items-center py-5 px-5 gap-5 border-t-2"
      >
        {firstTwentyCastResults.map((actor) => (
          <ActorLineItem
            key={actor.id}
            actor={actor}
            tvFirstAirDate={tvData.first_air_date}
            tvLastAirDate={tvData.last_air_date}
          />
        ))}
      </div>
    </>
  );
}