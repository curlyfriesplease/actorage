export async function fetchMovieData(value) {
  if (value.length) {
    console.log("value: " + value);
    try {
      const response = await fetch(`/api/movie?query=${value}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    return [];
  }
}
