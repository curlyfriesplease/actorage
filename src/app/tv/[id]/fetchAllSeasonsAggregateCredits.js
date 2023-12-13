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

  // Create an array of promises, each one being a fetch request for
  // the aggregate credits data for each season within the range of seasons provided.
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
    response?.cast?.map((actor) => ({
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
  // to seasonNumberLow and seasonNumberHigh respectively. Then, create a string that
  // describes the range of seasons, e.g. "Seasons 1-3, 5, 7-9".
  const finalActors = Object.values(groupedActors).map((group) => {
    const seasonNumbers = group.map((actor) => actor?.season_number);
    seasonNumbers.sort((a, b) => a - b);

    const seasonRanges = [];
    let currentRange = [seasonNumbers[0]];

    for (let i = 1; i < seasonNumbers.length; i++) {
      if (seasonNumbers[i] === currentRange[currentRange.length - 1] + 1) {
        currentRange.push(seasonNumbers[i]);
      } else {
        seasonRanges.push(currentRange);
        currentRange = [seasonNumbers[i]];
      }
    }
    seasonRanges.push(currentRange);

    const seasonNumbersText = seasonRanges
      .map((range) =>
        range.length > 1
          ? `${range[0]}-${range[range.length - 1]}`
          : `${range[0]}`
      )
      .join(', ');

    const seasonText = seasonNumbers.length > 1 ? 'Seasons' : 'Season';

    return {
      ...group[0],
      seasonNumberLow: Math.min(...seasonNumbers),
      seasonNumberHigh: Math.max(...seasonNumbers),
      seasonNumbersText: `${seasonText} ${seasonNumbersText}`,
    };
  });

  // Sort the actors by popularity
  const totalEpisodeCountSortedFinalActors = finalActors.sort(
    (a, b) => b.total_episode_count - a.total_episode_count
  );

  // Return the first 21 actors.
  return totalEpisodeCountSortedFinalActors.slice(0, 21);
}
