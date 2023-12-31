import { fetchPersonData } from './fetchPersonData';
import { fetchPersonCombinedCreditsData } from './fetchPersonCombinedCreditsData';
import { TitleAndImage } from '@/components/common/titleAndImage';
import NavBar from '@/components/NavBar/NavBar';
import Head from 'next/head';
import { ClientSideCreditsList } from './ClientSideCreditsList';
import Script from 'next/script';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

let personData = {};
let personCombinedCredits = {};

export default async function IdPage({ params }) {
  const id = params.id;
  if (id) {
    personData = await fetchPersonData(id);
    personCombinedCredits = await fetchPersonCombinedCreditsData(id);
  }

  if (!personData) {
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

  const firstFiftyCreditResultsSortedByPopularity = personCombinedCredits.slice(
    0,
    50
  );
  const birthday = new Date(personData.birthday);
  console.log('personData.birthday', personData.birthday);

  const calculateCurrentAge = () => {
    const today = new Date();
    let age;

    if (personData.birthday === null) {
      return `Age unknown`;
    }

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
      <Head>
        <title>{`How old was ${personData.name} in all their performances?`}</title>
        <meta
          name="description"
          content={`Find out how old ${personData.name} was when they made all their movies and TV shows.`}
        />
        <meta
          name="keywords"
          content="actor ages, TV, movies, celebrity ages, cast ages, Hollywood"
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
        mediaType="person"
        imagePath={personData.profile_path}
        title={personData.name}
        furtherData={personData}
        isMobile={isMobile}
        directorId={null}
        formattedReleaseDate={null}
        age={calculateCurrentAge()}
      />
      <ClientSideCreditsList
        firstFiftyCreditResultsSortedByPopularity={
          firstFiftyCreditResultsSortedByPopularity
        }
        birthday={birthday}
      />
    </>
  );
}
