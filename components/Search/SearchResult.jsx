import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faUser,
  faTv,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";

export const SearchResult = ({ result }) => {
  console.log(`SearchResult compo for`);
  console.dir(result);

  const getIcon = (type) => {
    switch (type) {
      case "movie":
        return (
          <FontAwesomeIcon icon={faFilm} className="px-2 w-30 text-pink-600" />
        );
      case "person":
        return (
          <FontAwesomeIcon
            icon={faUser}
            className="px-2 w-30 text-emerald-500"
          />
        );
      case "tv":
        return (
          <FontAwesomeIcon icon={faTv} className="px-2 w-30 text-sky-400" />
        );
      default:
        return (
          <FontAwesomeIcon
            icon={faStarOfLife}
            className="px-2 w-30 text-yellow-300"
          />
        );
    }
  };

  const handleOnClick = () => {
    switch (result.media_type) {
      case "movie":
        window.location.href = `/movie/${result.id}`;
        break;
      case "tv":
        window.location.href = `/tv/${result.id}`;
        break;
      case "person":
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
      className="flex justify-between px-5 py-2"
    >
      <div id="icon_and_name_container" className="flex items-center">
        {getIcon(result.media_type)}
        <h3>{result.title}</h3>
      </div>
      <h4 className="text-amber-300">{result.release_date}</h4>
    </div>
  );
};
