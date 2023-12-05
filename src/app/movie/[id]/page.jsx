import ActorLineItem from '@/components/ActorLineItem/ActorLineItem';
import { fetchMovieData } from './fetchMovieData';
import { fetchCreditsData } from './fetchCreditsData';
import { fetchActorData } from '@/components/ActorLineItem/fetchActorData';
import { TitleAndImage } from '@/components/common/titleAndImage';
import NavBar from '@/components/NavBar/NavBar';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

let movieData = {
  poster_path: '/images/PlaceholderFilmPoster.png',
};

let creditsData = {};
let directorId;

function getDirectorId(crew) {
  console.log('WHADDUP');
  for (const crewMember of crew) {
    if (crewMember.job === 'Director') {
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
    [movieData, creditsData] = await Promise.all([
      fetchMovieData(id),
      fetchCreditsData(id),
    ]);
    directorId = await getDirectorId(creditsData.crew);
  }

  if (!movieData) {
    return (
      <div
        className="    text-slate-700
    h-screen"
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

  const directorDetails = await fetchActorData(directorId);

  const dateString = movieData.release_date;
  const date = new Date(dateString);
  const formattedDate = (date) => {
    if (isNaN(date)) {
      console.log('The date is invalid.');
      return ' ';
    } else {
      return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
  };
  return (
    <>
      <header className="w-full">
        <NavBar />
      </header>
      <TitleAndImage
        mediaType="movie"
        imagePath={movieData.poster_path}
        title={movieData.title}
        furtherData={movieData}
        isMobile={isMobile}
        directorId={directorId}
        directorDetails={directorDetails}
        formattedReleaseDate={formattedDate(date)}
      />
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
      "
      >
        {combinedActorData.map((actor) => (
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
