import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilm,
  faUser,
  faTv,
  faStarOfLife,
} from '@fortawesome/free-solid-svg-icons';

export const SearchResult = ({ result, handleOnClick }) => {
  const getIcon = (type) => {
    const iconSize = 30;
    const iconColor =
      type === 'movie'
        ? 'text-pink-600'
        : type === 'person'
        ? 'text-emerald-500'
        : type === 'tv'
        ? 'text-sky-400'
        : 'text-yellow-300';

    switch (type) {
      case 'movie':
        return (
          <div
            className={`w-${iconSize} h-${iconSize} flex justify-center items-center w-30`}
          >
            <FontAwesomeIcon
              icon={faFilm}
              width={iconSize}
              height={iconSize}
              className={iconColor}
            />
          </div>
        );
      case 'person':
        return (
          <div
            className={`w-${iconSize} h-${iconSize} flex justify-center items-center w-30`}
          >
            <FontAwesomeIcon
              icon={faUser}
              width={iconSize}
              height={iconSize}
              className={iconColor}
            />
          </div>
        );
      case 'tv':
        return (
          <div
            className={`w-${iconSize} h-${iconSize} flex justify-center items-center w-30`}
          >
            <FontAwesomeIcon
              icon={faTv}
              width={iconSize}
              height={iconSize}
              className={iconColor}
            />
          </div>
        );
      default:
        return (
          <div
            className={`w-${iconSize} h-${iconSize} flex justify-center items-center w-30`}
          >
            <FontAwesomeIcon
              icon={faStarOfLife}
              width={iconSize}
              height={iconSize}
              className={iconColor}
            />
          </div>
        );
    }
  };

  return (
    <motion.div
      id="search-result-line"
      onClick={() => {
        handleOnClick(result.id, result.media_type);
      }}
      className="
      flex 
      justify-between 
      px-3 
      py-2 
      bg-white 
      max-w-[90vw]
      "
      variants={{
        initial: { opacity: 0, x: -150 },
        animate: { opacity: 1, x: 0 },
      }}
      transition={{
        type: 'spring',
        bounce: 0.45, // Adjust this value to control the bounciness
      }}
      whileHover={{ scale: 1.02 }}
      style={{
        borderRadius: '25px',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => {
        // e.currentTarget.style.border = '3px solid lightgrey';
        e.currentTarget.style.backgroundColor = '#f8e8ee';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.border = 'none';
        e.currentTarget.style.backgroundColor = '#f8f8f8';
      }}
    >
      <div id="icon_and_year_container" className="flex items-center">
        {getIcon(result.media_type)}
        <h4 className="text-amber-600 font-medium px-7 text-center">
          {result.release_date}
        </h4>
      </div>
      <h3 className="text-right font-medium text-sky-900">{result.title}</h3>
    </motion.div>
  );
};
