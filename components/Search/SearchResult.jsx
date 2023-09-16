import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilm,
  faUser,
  faTv,
  faStarOfLife,
} from '@fortawesome/free-solid-svg-icons';

export const SearchResult = ({ result }) => {
  console.log(`SearchResult compo for`);
  console.dir(result);

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

  const handleOnClick = () => {
    switch (result.media_type) {
      case 'movie':
        window.location.href = `/movie/${result.id}`;
        break;
      case 'tv':
        window.location.href = `/tv/${result.id}`;
        break;
      case 'person':
        window.location.href = `/actor/${result.id}`;
        break;
      default:
        break;
    }
  };

  return (
    <div
      // className="search-result"
      onClick={handleOnClick}
      className="flex justify-between px-3 py-2"
    >
      <div id="icon_and_year_container" className="flex items-center">
        {getIcon(result.media_type)}
        <h4 className="text-amber-300 px-7 text-center">
          {result.release_date}
        </h4>
      </div>
      <h3>{result.title}</h3>
    </div>
  );
};
