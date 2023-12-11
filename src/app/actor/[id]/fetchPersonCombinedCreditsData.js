import { checkEnvironment } from '../../functions/checkEnv';

const idsToBeExcluded = [
  1220, // Graham Norton
  103056, // The Lateish Show with Mo Gilligan
  61818, // Late Night with Seth Meyers
  62223, // The Late Late show with James Corden
  40302, // The Jonathan Ross Show
  797, // Have I got news for you
  4020, // 8 out of 10 cats
  62974, // 8 out of 10 cats does countdown
  1514, // The One Show
  14981, // The Late Late Show with Craig Ferguson
  60694, // Last Week Tonight with John Oliver
];

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
        .sort((a, b) => b.popularity - a.popularity)

        // exclude any objects with an ID that matches any of the IDs in the idsToBeExcluded array.
        .filter((credit) => !idsToBeExcluded.includes(credit.id));

      return filteredData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    return {};
  }
}
