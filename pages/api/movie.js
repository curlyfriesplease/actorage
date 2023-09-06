export default async function handler(req, res) {
  const { query } = req.query;
  const searchEndpoint = `https://api.themoviedb.org/3/movie/${query}?language=en-US`;
  const key = process.env.REACT_APP_TMDB_BEARER_TOKEN;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  try {
    const response = await fetch(searchEndpoint, options);
    const data = await response.json();
    console.log({ data });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
