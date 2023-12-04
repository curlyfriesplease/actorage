'use client';

import Image from 'next/image';

export const MainLogo = () => (
  <div id="main-full-size-logo">
    <Image
      src="/images/HOWTA_png_full_size.png"
      alt="navbarlogo"
      width={200}
      height={100}
      className="cursor-pointer"
    />
  </div>
);
