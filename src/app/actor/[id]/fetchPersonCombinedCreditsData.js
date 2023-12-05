import { checkEnvironment } from '../../functions/checkEnv';

export async function fetchPersonCombinedCreditsData(value) {
  if (value.length) {
    try {
      const response = await fetch(
        checkEnvironment().concat(`/api/actor?query=${value}/combined_credits`)
      );
      const data = await response.json();
      const castData = data.cast || [];

      const filteredData = castData
        .filter(
          (credit) =>
            credit.release_date?.length || credit.first_air_date?.length
        )
        .sort((a, b) => b.popularity - a.popularity);
      console.log(filteredData);
      return filteredData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    return {};
  }
}
