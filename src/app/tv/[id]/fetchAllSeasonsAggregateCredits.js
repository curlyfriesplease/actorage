import { checkEnvironment } from '../../functions/checkEnv';
import { fetchCreditsData } from './fetchCreditsData';

export async function fetchAllSeasonsAggregateCredits(
  id,
  seasonNumberFrom,
  seasonNumberTo
) {
  // Create an array to store the aggregate credits data.
  let aggregateCreditsData = [];
  let seasonNumbers = [];

  // Create an array of season numbers, based on the range of seasons provided.
  for (let i = seasonNumberFrom; i <= seasonNumberTo; i++) {
    seasonNumbers.push(i);
  }

  // Create an array of promises, each one being a fetch request for the aggregate credits data for each season within the range of seasons provided.
  const aggregateCreditsPromises = seasonNumbers.map((season_number) => {
    const seasonNumberPromise = fetchCreditsData(
      `${id}/season/${season_number}`
    )
      .then((data) => ({
        ...data,
        season_number, // Add the season number to the resolved object
      }))
      .catch((error) => console.error('Error:', error));
    return seasonNumberPromise;
  });

  // Execute all promises, and wait for all of them to resolve.
  const aggregateCreditsResponses = await Promise.all(aggregateCreditsPromises);

  // For each response, add the cast to the aggregateCreditsData array.
  aggregateCreditsResponses.forEach((response) => {
    if (Array.isArray(response?.cast)) {
      response.cast.forEach((actor) => {
        const existingActor = aggregateCreditsData.find(
          (a) => a.id === actor.id
        );
        if (existingActor) {
          existingActor.total_episode_count += actor.total_episode_count;
        } else {
          aggregateCreditsData.push(actor);
        }
      });
    } else {
      console.error('response.cast is not an array:', response?.cast);
    }
  });

  // Flatten aggregateCreditsResponses into a single array that contains all the actors.
  const allActors = aggregateCreditsResponses.flatMap((response) =>
    response?.cast.map((actor) => ({
      ...actor,
      season_number: response.season_number,
    }))
  );

  // Group the actors by their id (or any unique identifier for an actor).
  const groupedActors = allActors.reduce((groups, actor) => {
    if (!groups[actor?.id]) {
      groups[actor?.id] = [];
    }
    groups[actor?.id].push(actor);
    return groups;
  }, {});

  // For each group of actors, find the minimum and maximum season_number and assign these
  // to seasonNumberLow and seasonNumberHigh respectively.
  const finalActors = Object.values(groupedActors).map((group) => {
    const seasonNumbers = group.map((actor) => actor?.season_number);
    const seasonNumberLow = Math.min(...seasonNumbers);
    const seasonNumberHigh = Math.max(...seasonNumbers);
    return { ...group[0], seasonNumberLow, seasonNumberHigh };
  });

  // Sort the actors by popularity
  const totalEpisodeCountSortedFinalActors = finalActors.sort(
    (a, b) => b.total_episode_count - a.total_episode_count
  );

  // Return the first 21 actors.
  return totalEpisodeCountSortedFinalActors.slice(0, 21);
}
