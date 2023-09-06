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
        return <FontAwesomeIcon icon={faFilm} className="px-2" />;
      case "person":
        return <FontAwesomeIcon icon={faUser} className="px-2" />;
      case "tv":
        return <FontAwesomeIcon icon={faTv} className="px-2" />;
      default:
        return <FontAwesomeIcon icon={faStarOfLife} className="px-2" />;
    }
  };

  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected id ${result.id}!`)}
      className="flex justify-between"
    >
      <div id="icon_and_name_container" className="flex">
        {getIcon(result.media_type)}
        <h3>{result.title}</h3>
      </div>
      <h4>{result.release_date}</h4>
    </div>
  );
};
