import Image from 'next/image';
import DirectorDetails from '@/components/Misc/Director';

export const TitleAndImage = ({
  mediaType,
  imagePath,
  title,
  furtherData,
  isMobile,
  directorId,
  formattedReleaseDate,
  age,
}) => {
  return (
    <div
      id="title-and-image-container"
      className={`
    flex 
    ${isMobile ? 'flex-col' : 'flex-row'}      
    justify-center
    text-center
    max-h-96
    max-w-screen-md
    py-7
    px-3
    m-1
    gap-6
    rounded-lg
    max-w-1/2     
    bg-gradient-to-b from-rose-200 via-indigo-100 to-violet-200
        
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

      {mediaType === 'movie' && (
        <div
          id="film-title-and-extra-details"
          className="
          flex 
          flex-col
          items-center
          justify-center
           backdrop-blur-sm
           backdrop-opacity-80
           backdrop-contrast-200
           backdrop-brightness-50
           py-2
           px-2
            w-10/12
          rounded-lg
          backdrop-blur-sm
          backdrop-opacity-80
          backdrop-contrast-200
          backdrop-brightness-50
           "
        >
          <h2 id="movie-year" className="text-blue-400 text-3xl py-2">
            {title}
          </h2>
          <h3 className="text-pink-200 py-2 text-base">
            {furtherData.genres?.map((genre) => genre?.name).join(', ')},&nbsp;
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
      )}

      {mediaType === 'tv' && (
        <div
          id="tv-title"
          className="
        flex-grow
        flex 
        flex-col
        items-center
        justify-center
        backdrop-blur-sm
        backdrop-opacity-80
        backdrop-contrast-200
        backdrop-brightness-50
        py-2
        px-2
        w-10/12
        rounded-lg
        backdrop-blur-sm
        backdrop-opacity-80
        backdrop-contrast-200
        backdrop-brightness-50
      "
        >
          <h2 className="text-blue-400 text-5xl py-3">{title}</h2>
          <h3 className="text-pink-200 text-2xl py-3">
            {furtherData.number_of_seasons} Seasons
          </h3>
          <h3 className="text-pink-200 py-5">
            {'When broadcast between '}
            {furtherData?.first_air_date?.slice(0, 4)}
            {' and '}
            {furtherData?.last_air_date
              ? furtherData?.last_air_date.slice(0, 4)
              : 'present'}
            {':'}
          </h3>
        </div>
      )}

      {mediaType === 'person' && (
        <div
          id="actor-title"
          className="
          flex-grow
          flex 
          flex-col
          items-center
          justify-center
          backdrop-blur-sm
          backdrop-opacity-80
          backdrop-contrast-200
          backdrop-brightness-50
          py-2
          px-2
          w-10/12
          rounded-lg
          backdrop-blur-sm
          backdrop-opacity-80
          backdrop-contrast-200
          backdrop-brightness-50
        "
        >
          <h2 className="text-blue-400 text-3xl py-2">{title}</h2>
          <h3 className="text-pink-200 py-5">{furtherData.place_of_birth}</h3>
          <h2 className="text-amber-600 text-lg px-2">{age}</h2>
        </div>
      )}
    </div>
  );
};
