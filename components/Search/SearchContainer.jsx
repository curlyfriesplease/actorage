'use client';

import { motion } from 'framer-motion';

import { Suspense, useState } from 'react';
import SearchBar from './SearchBar';
import { SearchResultsList } from './SearchResultsList';

export default function SearchContainer() {
  const [results, setResults] = useState([]);
  return (
    <motion.div
      id="search-container"
      className="
      h-200 
      w-full 
      max-w-lg 
      pt-9 
      flex-col 
      justify-center
      relative
      "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, type: 'spring', bounce: 0.75 }}
    >
      <SearchBar setResults={setResults} />
      <Suspense fallback={<div>Loading...</div>} className="relative">
        {results && results.results?.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </Suspense>
    </motion.div>
  );
}
