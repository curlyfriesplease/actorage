"use client";

import { useState, useCallback } from "react";
import { fetchData } from "./fetchData";
import { MagnifyingGlassIcon } from "./icons";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const debouncedFetchData = useCallback(
    debounce((value) => {
      fetchData(value, setError, setResults);
    }, 1000),
    []
  );

  const handleChange = (value) => {
    setInput(value);
    debouncedFetchData(value);
  };

  return (
    <>
      <div className="relative w-full text-indigo-950">
        <input
          placeholder="Enter search..."
          type={"search"}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="bg-white h-10 px-5 py-4 pr-10 w-full rounded-full text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <MagnifyingGlassIcon />
        </button>
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
