'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <nav className="flex justify-between w-full">
      <div id="blank-spacer-div" style={{ width: '30px' }}></div>
      <motion.div id="header-logo">
        <Image
          src="/images/HOWTA_png_small_title_compressed.png"
          alt="navbarlogo"
          width={200}
          height={100}
          className="cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 1.75, type: 'spring', bounce: 0.5 }}
        />
      </motion.div>
      <div id="return-to-home" className="self-center">
        <Link href="/">
          <FontAwesomeIcon
            icon={faXmark}
            width={50}
            height={50}
            className={'text-sky-800'}
          />
        </Link>
      </div>
    </nav>
  );
}
