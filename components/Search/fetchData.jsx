export async function fetchData(value, setError, setResults) {
  const searchEndpoint = (query) =>
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
  const key = process.env.REACT_APP_TMDB_BEARER_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  if (value.length) {
    const res = await fetch(searchEndpoint(value), options)
      .then((res) => res.json())
      .then((res) => {
        setResults(res);
      })
      .catch((err) => {
        console.error("error:" + err);
        setError(err);
      });
  } else {
    setResults([]);
  }
}
