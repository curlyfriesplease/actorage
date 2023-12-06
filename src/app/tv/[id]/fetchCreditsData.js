import { checkEnvironment } from '../../functions/checkEnv';

export async function fetchCreditsData(value) {
  if (value.length) {
    console.log('fetchCreditsData (tv) value received: ' + value);
    try {
      const response = await fetch(
        checkEnvironment().concat(`/api/tv?query=${value}/aggregate_credits`)
      );
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
