'use client';

import { useState, useCallback } from 'react';
import { fetchSearchData } from './fetchSearchData';
import { MagnifyingGlassIcon } from './icons';

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const debouncedFetchData = useCallback(
    debounce((value) => {
      fetchSearchData(value, setError, setResults);
    }, 500),
    [setError, setResults]
  );

  const handleChange = (value) => {
    setInput(value);
    debouncedFetchData(value);
  };

  return (
    <>
      <div className="w-100 text-indigo-950 py-4 font-medium">
        <input
          placeholder="Enter movie, TV show, or actor name"
          type={'search'}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="bg-white h32 px-5 py-4 w-full rounded-full text-sm focus:outline-none"
        />
      </div>
    </>
  );
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
