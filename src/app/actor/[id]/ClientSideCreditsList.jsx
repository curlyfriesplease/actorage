'use client';
import MediaLineItem from '@/components/MediaLineItem/MediaLineItem';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

// The purpose of this compo is to be like the normal credits list, but it's
// client side so that a switch can be used for sorting, which relies on local state
// Additionally this allows for nicer animations.

export const ClientSideCreditsList = ({
  firstFiftyCreditResultsSortedByPopularity,
  birthday,
}) => {
  const [sortByPopularity, setSortByPopularity] = useState(true);

  //   const firstFiftyCreditsSortedByAge =
  //     firstFiftyCreditResultsSortedByPopularity.sort((a, b) => {
  //       const aDate = new Date(a.release_date || a.first_air_date);
  //       const bDate = new Date(b.release_date || b.first_air_date);
  //       return aDate - bDate;
  //     });

  //   const dataForMap = sortByPopularity
  //     ? firstFiftyCreditResultsSortedByPopularity
  //     : firstFiftyCreditsSortedByAge;

  const sortedDataForMap = [...firstFiftyCreditResultsSortedByPopularity].sort(
    (a, b) => {
      if (sortByPopularity) {
        return b.popularity - a.popularity;
      } else {
        const dateA = new Date(a.release_date || a.first_air_date);
        const dateB = new Date(b.release_date || b.first_air_date);
        return dateB - dateA;
      }
    }
  );

  return (
    <>
      <Switch
        checked={sortByPopularity}
        onChange={setSortByPopularity}
        className={`${
          sortByPopularity ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            sortByPopularity ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
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
        {sortedDataForMap.map((credit) => (
          <MediaLineItem
            key={credit.id}
            id={credit.id}
            imagePath={credit.poster_path}
            mediaTitle={credit.title || credit.original_title || credit.name}
            releaseDate={credit.release_date}
            tvFirstAirDate={credit.first_air_date}
            tvLastAirDate={credit.last_air_date}
            character={credit.character}
            actorBirthday={birthday}
            mediaType={credit.media_type}
          />
        ))}
      </div>
    </>
  );
};
