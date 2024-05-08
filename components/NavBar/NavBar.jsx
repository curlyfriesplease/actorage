'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <nav
      className="
    flex 
    justify-between 
    w-full
    py-4
    "
    >
      <div id="blank-spacer-div" style={{ width: '30px' }}></div>
      <div
        id="logo-and-buttons"
        className="    flex-col 
      items-center 
      justify-around
      "
      >
        <motion.div id="header-logo">
          <Link href="/">
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
          </Link>
        </motion.div>
        <div id="buttons" className="flex justify-around w-full pt-4">
          <button
            className="bg-blue-100 bg-opacity-80 font-josttext-sky-900 text-sm rounded p-2 w-[40%] h-[35px] hover:bg-blue-400"
            onClick={() =>
              (window.location.href = 'https://game.howoldwasthat.actor')
            }
          >
            GAME
          </button>
          <button
            className="bg-blue-300 bg-opacity-80 font-jost text-sky-900 rounded p-2 text-sm ring-2 ring-neutral-800 h-[35px] w-[40%] hover:bg-blue-400"
            onClick={() =>
              (window.location.href = 'https://www.howoldwasthat.actor')
            }
          >
            SEARCH
          </button>
        </div>
      </div>
      <div id="return-to-home" className="self-center">
        <Link href="/">
          <FontAwesomeIcon
            icon={faXmark}
            width={50}
            height={50}
            size="2x"
            className={'text-sky-800'}
          />
        </Link>
      </div>
    </nav>
  );
}
