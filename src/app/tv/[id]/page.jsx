import ActorLineItem from '@/components/ActorLineItem/ActorLineItem';
import { fetchTvData } from './fetchTvData';
import { fetchCreditsData } from './fetchCreditsData';
import { fetchActorData } from '@/components/ActorLineItem/fetchActorData';
import { fetchAllSeasonsAggregateCredits } from './fetchAllSeasonsAggregateCredits';
import { TitleAndImage } from '@/components/common/titleAndImage';
import NavBar from '@/components/NavBar/NavBar';
import Script from 'next/script';
import { LargeTVShowWarning } from '@/components/Misc/LargeTVShowWarning';

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
    flex items-center
     justify-center 
     min-h-screen
    "
      >
        Loading...
      </div>
    );
  }

  const firstTwentyOneCastResults = creditsData.cast.slice(0, 21);

  const isASoap = tvData.genres.some((genre) => genre.name === 'Soap');
  const moreThanTwentySeasons = tvData.number_of_seasons > 20;

  const lastSeasonNumber = tvData.number_of_seasons;
  const firstSeasonNumber = moreThanTwentySeasons
    ? tvData.number_of_seasons - 19
    : 1;
  const mostCommonTwentyOneActorsFromTheFirstTwentySeasonsAggregateCredits =
    await fetchAllSeasonsAggregateCredits(
      id,
      firstSeasonNumber,
      lastSeasonNumber
    );

  // Add in further details for each actor, which includes their birthdays.
  const combinedActorData = await Promise.all(
    mostCommonTwentyOneActorsFromTheFirstTwentySeasonsAggregateCredits.map(
      async (actor) => {
        const actorData = await fetchActorData(actor.id);
        return { ...actor, ...actorData };
      }
    )
  );

  // a function that can be passed a season number and returns the date of the first episode of that season
  function findAirDateBySeasonNumber(seasonNumber) {
    const season = tvData.seasons.find(
      (season) => season.season_number === seasonNumber
    );
    return season ? season.air_date : null;
  }

  // console.log(combinedActorData.slice(0, 2));
  // console.log('combinedActorData', combinedActorData);

  return (
    <>
      <Head>
        <title>{`How old was the cast of ${tvData.original_name}?`}</title>
        <meta
          name="description"
          content={`Find out how old the cast of ${tvData.original_name} was.`}
        />
        <meta
          name="keywords"
          content="actor ages, actors, entertainment, TV, movies, celebrity ages, cast ages, Hollywood"
        ></meta>
      </Head>
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
      {(isASoap || moreThanTwentySeasons) && (
        <LargeTVShowWarning
          isASoap={isASoap}
          moreThanTwentySeasons={moreThanTwentySeasons}
        />
      )}
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
            tvFirstAirDate={findAirDateBySeasonNumber(actor.seasonNumberLow)}
            tvLastAirDate={findAirDateBySeasonNumber(actor.seasonNumberHigh)}
          />
        ))}
      </div>
    </>
  );
}
