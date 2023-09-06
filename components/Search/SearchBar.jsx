"use client";

import { useState, useCallback } from "react";
import { fetchSearchData } from "./fetchSearchData";
import { MagnifyingGlassIcon } from "./icons";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const debouncedFetchData = useCallback(
    debounce((value) => {
      fetchSearchData(value, setError, setResults);
    }, 1000),
    []
  );

  const handleChange = (value) => {
    setInput(value);
    debouncedFetchData(value);
  };

  return (
    <>
      <div className="w-96 text-indigo-950 py-4">
        <input
          placeholder="Enter search..."
          type={"search"}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="bg-white h-10 px-5 py-4 w-full rounded-full text-sm focus:outline-none"
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
