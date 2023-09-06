export async function fetchSearchData(value, setError, setResults) {
  if (value.length) {
    console.log("value: " + value);
    try {
      const response = await fetch(`/api/search?query=${value}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  } else {
    setResults([]);
  }
}

// export async function fetchData(value, setError, setResults) {
//   const searchEndpoint = (query) =>
//     `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
//   //   const key = process.env.REACT_APP_TMDB_BEARER_TOKEN;
//   const key =
//     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzg5ZDY2YjE2NzBkNDQ4ZmM2ZjgxNDRjZjU5YWQ1YSIsInN1YiI6IjY0YTFlNzI3ZDUxOTFmMDBhYzkzMTMxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1tMLOuqBadl1D60Yoi7L5s6L3fMckMwF2XpYrGRHCJQ";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${key}`,
//     },
//   };

//   if (value.length) {
//     const res = await fetch(searchEndpoint(value), options)
//       .then((res) => res.json())
//       .then((res) => {
//         setResults(res);
//       })
//       .catch((err) => {
//         console.error("error:" + err);
//         setError(err);
//       });
//   } else {
//     setResults([]);
//   }
// }
