import { fetchPersonData } from './fetchPersonData';
import { fetchPersonCombinedCreditsData } from './fetchPersonCombinedCreditsData';
import MediaLineItem from '@/components/MediaLineItem/MediaLineItem';
import { TitleAndImage } from '@/components/common/titleAndImage';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

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
      <TitleAndImage
        mediaType="person"
        imagePath={personData.profile_path}
        title={personData.name}
        furtherData={personData}
        isMobile={isMobile}
        directorId={null}
        formattedReleaseDate={null}
        age={calculateCurrentAge()}
      />
      <div
        id="actors-list"
        className="
        flex
        flex-row
        flex-wrap
        items-center
        justify-center  
        py-5
        px-5
        gap-5
        "
      >
        {firstFiftyCreditResults.map((credit) => (
          <MediaLineItem
            key={credit.id}
            id={credit.id}
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
