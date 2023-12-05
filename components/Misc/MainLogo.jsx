'use client';

import Image from 'next/image';

export const MainLogo = () => (
  <div
    id="main-full-size-logo"
    className="
    relative 
    w-2/3
    pb-full
   "
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
  </div>
);
