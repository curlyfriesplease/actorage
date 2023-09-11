export async function fetchMovieData(value) {
  if (value.length) {
    console.log('fetchMovieData value received: ' + value);
    try {
      const response = await fetch(`/api/movie?query=${value}`);
      const data = await response.json();
      console.log({ data });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    return [];
  }
}
