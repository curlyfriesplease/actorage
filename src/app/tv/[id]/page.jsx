import ActorLineItem from '@/components/ActorLineItem/ActorLineItem';
import { fetchTvData } from './fetchTvData';
import { fetchCreditsData } from './fetchCreditsData';
import { fetchActorData } from '@/components/ActorLineItem/fetchActorData';
import { TitleAndImage } from '@/components/common/titleAndImage';
import NavBar from '@/components/NavBar/NavBar';
import Script from 'next/script';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

let tvData = {
  poster_path: '/images/PlaceholderFilmPoster.png',
};

let creditsData = {};

export default async function IdPage({ params }) {
  const id = params.id;
  console.log(`Id is ${id}`);
  if (id) {
    console.log("Hi there, there's a tv id");
    tvData = await fetchTvData(id);
    creditsData = await fetchCreditsData(id);
  }

  if (!tvData) {
    return (
      <div
        className="
    text-slate-700
    h-screen
    "
      >
        Loading...
      </div>
    );
  }

  const firstTwentyOneCastResults = creditsData.cast.slice(0, 21);

  const fetchAllActorData = async () => {
    const actorDataPromises = firstTwentyOneCastResults.map((actor) =>
      fetchActorData(actor.id)
    );
    const actorDataResults = await Promise.all(actorDataPromises);

    return firstTwentyOneCastResults.map((actor, index) => ({
      ...actor,
      ...actorDataResults[index],
    }));
  };

  const combinedActorData = await fetchAllActorData();

  return (
    <>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FTXF5FMKJZ" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FTXF5FMKJZ');
        `}
        </Script>
      </div>
      <header className="w-full">
        <NavBar />
      </header>
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
        {combinedActorData.map((actor) => (
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
