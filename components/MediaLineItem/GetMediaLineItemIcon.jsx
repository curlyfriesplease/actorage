import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

export const GetMediaLineItemIcon = (mediaType) => {
  const iconSize = 30;
  const iconColor =
    mediaType === 'movie'
      ? 'text-pink-600'
      : mediaType === 'tv'
      ? 'text-sky-400'
      : 'text-yellow-300';

  switch (mediaType) {
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
