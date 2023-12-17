'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { popularTitleIds } from './titleIds';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const PopularTitles = () => {
  const handleOnClick = (url) => {
    setLoading(true);
    window.location.href = `${url}`;
  };

  const [sixTitleIds, setTitleIds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitleIds(popularTitleIds.sort(() => 0.5 - Math.random()).slice(0, 6));
  }, []);

  return (
    <motion.div
      id="popular-titles"
      className="
        w-full 
        max-w-[430px]
        flex-grow
        max-h-[40vh]
        flex-1
        text-center
        text-md
        md:text-xl
        text-sky-600
        text-bold
        overflow-hidden
        no-scrollbar
        flex
        flex-col
        justify-center
        items-center
        rounded-xl
        "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.25, type: 'spring', bounce: 0.75 }}
    >
      {loading && (
        <div
          id="loading-spinner-container"
          className="
                flex
                justify-center
                h-full
                "
          style={{ height: '155px' }}
        >
          <Image
            src="/images/LoadingEclipse.gif"
            alt="Loading"
            width={150} // specify the width
            height={100} // specify the height
            objectFit="contain"
          />
        </div>
      )}

      {!loading && (
        <>
          <h2 className="py-3">Popular titles</h2>
          <div
            id="popular-titles-images"
            className="
            grid
            grid-cols-3
            gap-3 
            justify-items-stretch
            w-full
            h-full
            overflow-hidden
            no-scrollbar
            rounded-xl
          "
          >
            {sixTitleIds.map((title) => (
              <motion.div
                id="popular-titles-image-container"
                key={title.id}
                className="
                  bg-transparent
                  hover:bg-gradient-to-b 
                  from-rose-200 
                  via-indigo-100 
                  to-violet-200
                  rounded-xl 
                  text-center 
                  fade-edges 
                  overflow-hidden
                  cursor-pointer
                  relative
                  flex
                  items-center
                  justify-center
                  "
                onClick={() => {
                  handleOnClick(title.id);
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  id="weird-div"
                  className="
                    w-64 
                    lg:w-80
                    h-96 
                    px-1 
                    lg:p-2
                    max-h-full
                    "
                >
                  <div className="w-full h-full relative">
                    <Image
                      id="popular-titles-image"
                      src={`https://image.tmdb.org/t/p/w200${title.img}`}
                      layout="fill"
                      objectFit="contain"
                      alt={title.id}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};
