import { checkEnvironment } from '../../functions/checkEnv';

export async function fetchPersonCombinedCreditsData(value) {
  if (value.length) {
    console.log('fetchPersonCombinedCreditsData value received: ' + value);
    try {
      const response = await fetch(
        checkEnvironment().concat(`/api/actor?query=${value}/combined_credits`)
      );
      const data = await response.json();
      // console.log(data);
      const castData = data.cast || [];
      // console.log(castData);
      const filteredData = castData
        .filter(
          (credit) =>
            credit.release_date?.length || credit.first_air_date?.length
        )
        .sort((a, b) => b.popularity - a.popularity);
      // const objectData = Object.fromEntries(
      //   filteredData.map((credit) => [credit.id, credit])
      // );
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
