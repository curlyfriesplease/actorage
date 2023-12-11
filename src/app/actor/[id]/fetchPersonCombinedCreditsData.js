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
  63770, // The Late Show with Stephen Colbert
  562, // The Ellen DeGeneres Show
  2518, // The Tonight Show with Jay Leno
  32415, // Conan
  20477, // Wogan
  8563, // The Jay Leno Show
  1975, // Saturday Night Live
  766, // This morning
  59941, // Tonight with Jimmy Fallon
  2221, // The view
  1709, // Today
  2224, // The daily show
  4573, // Late Night with Conan O'Brien
  8621, // Late night with Jimmy Fallon
  1900, // Live with Kelly and Mark
  10029, // Great performances
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
        .filter((credit) => !idsToBeExcluded.includes(credit.id))

        // If there are multiple credits for the same id, combine them but ensure that "character"
        //  doesn't lose any data, and combines any entries into an array.
        .reduce((accumulator, credit) => {
          const existingCredit = accumulator.find((a) => a.id === credit.id);
          if (existingCredit) {
            existingCredit.character = Array.isArray(existingCredit.character)
              ? existingCredit.character
              : [existingCredit.character];
            existingCredit.character.push(credit.character);
          } else {
            accumulator.push(credit);
          }
          return accumulator;
        }, []);

      return filteredData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    return {};
  }
}
