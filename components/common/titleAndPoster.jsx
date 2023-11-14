import Image from 'next/image';
import DirectorDetails from '@/components/Misc/Director';

export const TitleAndPoster = ({
  mediaType,
  imagePath,
  title,
  furtherData,
  isMobile,
  directorId,
  formattedReleaseDate,
}) => {
  return (
    <div
      id="film-title-poster-and-title"
      className={`
    flex 
    ${isMobile ? 'flex-col' : 'flex-row'}      
    items-center
    justify-center
    text-center
    max-h-96
    max-w-screen-md
    py-7
    px-3
    m-1
    gap-5
    rounded-lg
    max-w-1/2
    `}
    >
      <div id="film-title-poster" className="px 4">
        <Image
          src={
            imagePath
              ? `https://image.tmdb.org/t/p/w200/${imagePath}`
              : '/images/PlaceholderFilmPoster.png'
          }
          alt="Film poster"
          width={isMobile ? 300 : 200}
          height={isMobile ? 400 : 300}
          className="rounded-lg"
        />
      </div>
      <div
        id="film-title-and-extra-details"
        className="flex flex-col items-center"
      >
        <h2 id="movie-year" className="text-blue-400 text-3xl py-2">
          {title}
        </h2>
        <h3 className="text-pink-200 py-2 text-base">
          {furtherData.genres.map((genre) => genre.name).join(', ')},&nbsp;
          {furtherData.runtime} mins{' '}
        </h3>
        <DirectorDetails
          id={directorId}
          releaseDate={furtherData.release_date}
        />
        <h3 className="text-pink-200 text-xl py-5">
          {`At the time of release ${formattedReleaseDate}:`}
        </h3>
      </div>
    </div>
  );
};
