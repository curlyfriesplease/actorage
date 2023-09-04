"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

export default function SearchContainer() {
  const [results, setResults] = useState([]);

  return (
    <div className="h-200">
      <div>search:</div>
      <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
    </div>
  );
}
