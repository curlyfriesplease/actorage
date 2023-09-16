import { useMemo } from 'react';
import { SearchResult } from './SearchResult';

export const SearchResultsList = ({ results }) => {
  console.log('search results list');
  console.dir(results);

  const transformResults = (results) => {
    return results.results.map((result) => {
      const { media_type, title, name, release_date, first_air_date, id } =
        result;
      const transformedTitle =
        media_type === 'person' ? name : media_type === 'tv' ? name : title;
      const transformedReleaseDate =
        release_date || first_air_date
          ? (release_date || first_air_date).slice(0, 4)
          : null;
      return {
        media_type,
        title: transformedTitle,
        release_date: transformedReleaseDate,
        id,
      };
    });
  };

  const memoizedTransformedResults = useMemo(() => {
    return transformResults(results);
  }, [results]);

  console.log('memoizedTransformedResults:');
  console.dir(memoizedTransformedResults);

  return (
    <div id="results-list">
      {memoizedTransformedResults.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};
