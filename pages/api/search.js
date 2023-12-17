export default async function handler(req, res) {
  const { query } = req.query;
  const searchEndpoint = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
  const key = process.env.REACT_APP_TMDB_BEARER_TOKEN;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
  };

  try {
    const response = await fetch(searchEndpoint, options);
    const data = await response.json();

    // Set the popularity score, filter below this value
    data.results = data.results.filter((result) => result.popularity >= 10);

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
