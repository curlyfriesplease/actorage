'use client';

import Image from 'next/image';
import DirectorDetails from '@/components/Misc/Director';
import { motion } from 'framer-motion';

export const TitleAndImage = ({
  mediaType,
  imagePath,
  title,
  furtherData,
  directorId,
  directorDetails,
  formattedReleaseDate,
  age,
}) => {
  console.log('age', age);
  return (
    <motion.div
      id="title-and-image-container"
      className={`
    flex
    justify-center
    items-center
    text-center
    max-h-96
    max-w-screen-md
    py-3
    px-4
    m-1
    mt-5
    gap-6
    rounded-3xl
    shadow-2xl
    max-w-1/2     
    backdrop-blur-md
    backdrop-opacity-70
    backdrop-contrast-200
    backdrop-brightness-50
    bg-gradient-to-b from-rose-200 via-indigo-100 to-violet-200      
    `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
    >
      <div id="film-title-poster" className="px 4">
        <Image
          src={
            imagePath
              ? `https://image.tmdb.org/t/p/w200/${imagePath}`
              : '/images/PlaceholderFilmPoster.png'
          }
          alt="Film poster"
          width={200}
          height={300}
          className="
          rounded-lg
          shadow-xl
          shadow-inner
          "
        />
      </div>

      {mediaType === 'movie' && (
        <div
          id="film-title-and-extra-details"
          className="
          min-h-[250px]
          flex 
          flex-col
          items-center
          justify-center
          py-2
          px-2
          w-10/12
          rounded-lg
          "
        >
          <h2
            id="movie-year"
            className="
            text-blue-500 
            md:text-3xl
            text-xl
            py-2 
            font-semibold"
          >
            {title}
          </h2>
          <h3
            className="
          text-sky-600
           py-2 
           text-sm 
           md:text-lg
           font-medium
           "
          >
            {furtherData.genres?.map((genre) => genre?.name).join(', ')},&nbsp;
            {furtherData.runtime} mins{' '}
          </h3>
          <DirectorDetails
            id={directorId}
            releaseDate={furtherData.release_date}
            directorDetails={directorDetails}
          />
          <h3 className="text-sky-600 text-lg py-5 font-semibold">
            {`At the time of release ${formattedReleaseDate}:`}
          </h3>
        </div>
      )}

      {mediaType === 'tv' && (
        <div
          id="tv-title"
          className="
        min-h-[300px]
        flex-grow
        flex 
        flex-col
        items-center
        justify-center
        py-2
        px-2
        w-6/12
        rounded-lg
        font-medium
        "
        >
          <h2 className="text-blue-500 text-3xl py-3">{title}</h2>
          <h3 className="text-pink-500 text-2xl py-3">
            {Math.max(
              ...furtherData.seasons.map((season) => season.season_number)
            )}{' '}
            Seasons
          </h3>
          <h3 className="text-pink-500 py-5 font-medium">
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
          min-h-[212px]
          flex-grow
          flex 
          flex-col
          items-center
          justify-center
          backdrop-blur-sm
          py-2
          px-2
          w-10/12
          rounded-lg
          font-medium
        "
        >
          <h2 className="text-blue-500 text-3xl py-2 font-medium">{title}</h2>
          <h3 className="text-pink-500 py-5 font-medium">
            {furtherData.place_of_birth}
          </h3>
          <h2 className="text-amber-600 text-lg px-2 font-medium">
            {age ? age : 'Age unknown'}
          </h2>
        </div>
      )}
    </motion.div>
  );
};
