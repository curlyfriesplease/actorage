import { checkEnvironment } from "../../functions/checkEnv";

export async function fetchPersonData(value) {
  if (value.length) {
    console.log("fetchPersonData value received: " + value);
    try {
      const response = await fetch(
        checkEnvironment().concat(`/api/actor?query=${value}`)
      );
      const data = await response.json();
      console.log({ data });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    return [];
  }
}
