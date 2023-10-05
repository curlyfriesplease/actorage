import Image from 'next/image';
import { fetchPersonData } from './fetchPersonData';
import { fetchPersonCombinedCreditsData } from './fetchPersonCombinedCreditsData';
import MediaLineItem from '@/components/MediaLineItem/MediaLineItem';

let personData = {};
let personCombinedCredits = {};

export default async function IdPage({ params }) {
  const id = params.id;
  console.log(`Id is ${id}`);
  if (id) {
    console.log("Hi there, there's a person id");
    personData = await fetchPersonData(id);
    personCombinedCredits = await fetchPersonCombinedCreditsData(id);
  }

  if (!personData) {
    return <div>Loading...</div>;
  }

  const firstFiftyCreditResults = personCombinedCredits.slice(0, 50);
  const birthday = new Date(personData.birthday);

  const calculateCurrentAge = () => {
    const today = new Date();
    let age;
    if (personData.deathday) {
      const deathday = new Date(personData.deathday);
      age = deathday.getFullYear() - birthday.getFullYear();
      const monthDifference = deathday.getMonth() - birthday.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && deathday.getDate() < birthday.getDate())
      ) {
        age--;
      }
      return `Passed away in ${deathday.getFullYear()} at the age of ${age} years old`;
    } else {
      age = today.getFullYear() - birthday.getFullYear();
      const monthDifference = today.getMonth() - birthday.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthday.getDate())
      ) {
        age--;
      }
      return `Is currently ${age} years old`;
    }
  };

  return (
    <>
      <div
        id="actor-name-and-details"
        className="flex items-center py-7 px-8 gap-5"
      >
        <div id="actor-portrait">
          <Image
            src={
              personData.profile_path
                ? `https://image.tmdb.org/t/p/w200/${personData.profile_path}`
                : '/images/PlaceholderFilmPoster.png'
            }
            alt="Film poster"
            width={200}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div id="actor-title" className="flex flex-col items-center">
          <h2 className="text-blue-400 text-5xl py-2">{personData.name}</h2>
          <h3 className="text-pink-200 py-5">{personData.place_of_birth}</h3>
          <h2 className="text-amber-600 text-xl">{calculateCurrentAge()}</h2>
        </div>
      </div>
      <div
        id="actors-list"
        className="
        flex
        flex-row
        flex-wrap
        items-center
        py-5
        px-5
        gap-5
        border-t-2"
      >
        {firstFiftyCreditResults.map((credit) => (
          <MediaLineItem
            key={credit.id}
            imagePath={credit.poster_path}
            mediaTitle={credit.title || credit.original_title}
            releaseDate={credit.release_date}
            character={credit.character}
            actorBirthday={birthday}
            mediaType={credit.media_type}
          />
        ))}
      </div>
    </>
  );
}
