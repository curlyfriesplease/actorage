import { checkEnvironment } from '@/src/app/functions/checkEnv';

export async function fetchActorData(value, setError, setResults) {
  if (value) {
    try {
      const response = await fetch(
        checkEnvironment().concat(`/api/actor?query=${value}`)
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  } else {
    return [];
  }
}
