'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

export const MainLogo = () => (
  <motion.div
    id="main-full-size-logo"
    className="
    relative 
    w-2/3
    pb-full
   "
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.7 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, rotate: 360 }}
    transition={{ duration: 1.75, type: 'spring', bounce: 0.5 }}
  >
    <Image
      src="/images/HOWTA_png_full_size.png"
      alt="navbarlogo"
      width={200} // replace with your image's width
      height={200} // replace with your image's height
      layout="responsive"
      objectFit="contain"
      className="cursor-pointer"
    />
  </motion.div>
);
