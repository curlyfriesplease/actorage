'use client';

import React from 'react';
import { popularTitleIds } from './titleIds';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const PopularTitles = () => {
  const handleOnClick = (url) => {
    window.location.href = `${url}`;
  };

  const titleIds = popularTitleIds.sort(() => 0.5 - Math.random()).slice(0, 6);
  return (
    <motion.div
      id="popular-titles"
      className="
    w-full 
    max-w-[80%]
    h-2/5
    max-h-[30vh]
    flex-1
    text-center
    text-md
    md:text-xl
    text-sky-600
    text-bold
    "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.25, type: 'spring', bounce: 0.75 }}
    >
      <h2 className="py-3">POPULAR TITLES</h2>
      <div
        id="popular-titles-images"
        className="
        grid
        grid-cols-3
        grid-rows-2
        gap-3 
        justify-items-stretch
        h-full
        md:max-h-[30vh]
        w-full
          "
      >
        {titleIds.map((title) => (
          <motion.div
            key={title.id}
            className="
              px-4 
              py-4 
              bg-gradient-to-b 
              from-rose-200 
              via-indigo-100 
              to-violet-200
              hover:bg-zinc-900 
              rounded-xl 
              text-center 
              fade-edges 
              overflow-auto 
              cursor-pointer
              relative
            "
            onClick={() => {
              handleOnClick(title.id);
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w200${title.img}`}
              layout="fill"
              objectFit="cover"
              alt={title.name}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
