export async function fetchSearchData(value, setError, setResults) {
  if (value.length) {
    console.log('fetchSearchData value: ' + value);
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
