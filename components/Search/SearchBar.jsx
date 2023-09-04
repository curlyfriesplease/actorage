"use client";

import { useState, useCallback } from "react";
import { fetchData } from "./fetchData";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");


  const handleChange = (value) => {
    setInput(value);
    fetchData(value, setError, setResults);
  };

  return (
    <>
      <div className="relative w-full text-indigo-950">
        <input
          placeholder="Enter search..."
          type={"search"}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <h1 className="text-red-500">{error}</h1>
    </>
  );
}
