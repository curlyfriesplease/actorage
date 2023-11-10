import { checkEnvironment } from "../../functions/checkEnv";

// TODO: I don't think this is going to work if clicking into a director, because it's calling the actor endpoint.

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
