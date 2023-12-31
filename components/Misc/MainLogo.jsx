'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';

export const MainLogo = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount > 7) {
      const audio = new Audio('/audio/quack.mp3');
      audio.play();
      console.log('THE DUCK HAS AWOKEN');
    }
  }, [clickCount]);

  return (
    <motion.div
      id="main-full-size-logo"
      className="
      flex 
      flex-grow
      relative 
      w-2/3
      pb-full
      py-10
      w-[300px]
      h-[300px]
   "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ duration: 1.75, type: 'spring', bounce: 0.5 }}
      onClick={() => setClickCount((prevCount) => prevCount + 1)}
    >
      <Image
        src="/images/HOWTA_png_full_size_compressed.png"
        alt="navbarlogo"
        layout="fill"
        objectFit="contain"
        className="cursor-pointer max-w-full max-h-full"
      />
    </motion.div>
  );
};
