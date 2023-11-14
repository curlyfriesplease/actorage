import ActorLineItem from '@/components/ActorLineItem/ActorLineItem';
import { fetchTvData } from './fetchTvData';
import { fetchCreditsData } from './fetchCreditsData';
import { TitleAndImage } from '@/components/common/titleAndImage';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

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
      <TitleAndImage
        mediaType="tv"
        imagePath={tvData.poster_path}
        title={tvData.original_name}
        furtherData={tvData}
        isMobile={isMobile}
        directorId={null}
        formattedReleaseDate={null}
        age={null}
      />
      <div
        id="actors-list"
        className="
          flex
          flex-row
          flex-wrap
          justify-center
          items-center
          py-5
          px-5
          gap-5
         "
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
