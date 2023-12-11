'use client';

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export const LargeTVShowWarning = ({ isASoap, moreThanTwentySeasons }) => {
  const textToDisplay = () => {
    switch ((isASoap, moreThanTwentySeasons)) {
      case isASoap && moreThanTwentySeasons:
        return 'This appears to be a soap. With the available data, and the sporadic nature of cast appearances, it is challenging to calculate the ages of the cast. To limit the amount of data that is fetched, only the most recent 20 seasons are shown. There are likely to be inaccuracies in the ages given.';
      case isASoap && !moreThanTwentySeasons:
        return 'This appears to be a soap. With the available data, and the sporadic nature of cast appearances, it is challenging to calculate the ages of the cast. There are likely to be inaccuracies in the ages given.';
      default:
        return 'This show has more than 20 seasons. To limit the amount of data that is fetched, only the most recent 20 seasons are displayed.';
    }
  };

  return (
    <motion.div
      id="LargeTVShowWarningOuterContainer"
      className="
        flex
        justify-between
        items-center
        w-5/6
        h-full
        text-sky-800
        px-5
        py-5
        mt-7
        mb-4
        rounded-3xl
        bg-gradient-to-b 
        from-amber-300 
        to-yellow-300
        border-4 border-amber-400
        "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.9, type: 'spring', bounce: 0.5 }}
    >
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        width={50}
        height={50}
        size="2x"
        className="
        text-sky-800
        px-2
        "
      />
      <p
        className="
                    text-base
                    text-center
                    px-1
                    "
      >
        {textToDisplay()}
      </p>
    </motion.div>
  );
};
