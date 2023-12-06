'use client';
import MediaLineItem from '@/components/MediaLineItem/MediaLineItem';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

// The purpose of this compo is to be like the normal credits list, but it's
// client side so that a switch can be used for sorting, which relies on local state
// Additionally this allows for nicer animations.

export const ClientSideCreditsList = ({
  firstFiftyCreditResultsSortedByPopularity,
  birthday,
}) => {
  const [sortByPopularity, setSortByPopularity] = useState(true);

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
      <motion.div
        className="
        flex
        flex-row
        justify-center
        items-center
        gap-6 
        w-full
        text-center
        text-blue-500
        pt-7"
        id="data-sort-switch-row"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="w-1/6 text-center">DATE SORT</p>
        <Switch
          checked={sortByPopularity}
          onChange={setSortByPopularity}
          className={`${sortByPopularity ? 'bg-rose-200' : 'bg-violet-200'} 
          shadow-3xl
          relative 
          inline-flex 
          h-6 
          w-11 
          items-center 
          rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              sortByPopularity ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <p className="w-1/6 text-center">POPULARITY SORT</p>
      </motion.div>
      <AnimatePresence>
        <motion.div
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
          layout
        >
          {sortedDataForMap.map((credit) => (
            <motion.div
              key={credit.id}
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, bounce: 1 }}
            >
              <MediaLineItem
                id={credit.id}
                imagePath={credit.poster_path}
                mediaTitle={
                  credit.title || credit.original_title || credit.name
                }
                releaseDate={credit.release_date}
                tvFirstAirDate={credit.first_air_date}
                tvLastAirDate={credit.last_air_date}
                character={credit.character}
                actorBirthday={birthday}
                mediaType={credit.media_type}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
