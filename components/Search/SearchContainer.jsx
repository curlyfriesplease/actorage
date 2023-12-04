'use client';

import { Suspense, useState } from 'react';
import SearchBar from './SearchBar';
import { SearchResultsList } from './SearchResultsList';

export default function SearchContainer() {
  const [results, setResults] = useState([]);
  console.dir(results);
  return (
    <div className="h-200 w-full max-w-md pt-8">
      <SearchBar setResults={setResults} />
      <Suspense fallback={<div>Loading...</div>}>
        {results && results.results?.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </Suspense>
    </div>
  );
}
