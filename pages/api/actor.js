import { checkEnvironment } from '@/src/app/functions/checkEnv';

export default async function handler(req, res) {
  console.log('ACTOR API CALLED');
  const { query } = req.query;
  const actorEndpoint = `https://api.themoviedb.org/3/person/${query}`;
  const key = process.env.REACT_APP_TMDB_BEARER_TOKEN;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
  };

  try {
    const response = await fetch(actorEndpoint, options);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
