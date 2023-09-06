import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchResult = ({ result }) => {
  console.log(`SearchResult compo for`);
  console.dir(result)

  const getIcon = (type) => {
    switch (type) {
      case "movie":
        return <FontAwesomeIcon icon={["fa-solid", "film"]} />;
      case "person":
        return <FontAwesomeIcon icon={["fa-solid", "user"]} />;
      case "tv":
        return <FontAwesomeIcon icon={["fa-solid", "tv"]} />;
      default:
        return <FontAwesomeIcon icon={["fa-solid", "star-of-life"]} />;
    }
  };

  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected id ${result.id}!`)}
    >
      <div id="icon_and_name_container"></div>
      {getIcon(result.media_type)}
      <h3>{result.title}</h3>
      <h4>{result.release_date}</h4>
    </div>
  );
};
