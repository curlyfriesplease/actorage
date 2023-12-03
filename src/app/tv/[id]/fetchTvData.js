import { checkEnvironment } from '../../functions/checkEnv';

export async function fetchTvData(value) {
  if (value.length) {
    try {
      const response = await fetch(
        checkEnvironment().concat(`/api/tv?query=${value}`)
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
