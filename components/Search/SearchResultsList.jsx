'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Suspense, useMemo } from 'react';
import { SearchResult } from './SearchResult';

export const SearchResultsList = ({ results }) => {
  const [isResultsVisible, setIsResultsVisible] = useState(true);

  const handleOnClick = (id, mediaType) => {
    switch (mediaType) {
      case 'movie':
        window.location.href = `/movie/${id}`;
        break;
      case 'tv':
        window.location.href = `/tv/${id}`;
        break;
      case 'person':
        window.location.href = `/actor/${id}`;
        break;
      default:
        break;
    }
    setIsResultsVisible(false);
  };

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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence>
        {isResultsVisible && (
          <motion.div
            id="results-list"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
              exit: {
                opacity: 0,
                x: 150,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {memoizedTransformedResults.map((result, id) => {
              return (
                <SearchResult
                  result={result}
                  key={id}
                  handleOnClick={handleOnClick}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </Suspense>
  );
};
