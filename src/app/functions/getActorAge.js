export const getActorAge = (
  beeeeeeeerthday,
  releaseDate,
  tvFirstAirDate,
  tvLastAirDate
) => {
  if (beeeeeeeerthday) {
    if (releaseDate) {
      const movieRelease = new Date(releaseDate);
      const age = movieRelease.getFullYear() - beeeeeeeerthday.getFullYear();
      const monthDifference =
        movieRelease.getMonth() - beeeeeeeerthday.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
          movieRelease.getDate() < beeeeeeeerthday.getDate())
      ) {
        return `Was ${age - 1}`;
      }
      return `Was ${age}`;
    } else {
      const tvStartDate = new Date(tvFirstAirDate);
      const tvEndDate = tvLastAirDate ? new Date(tvLastAirDate) : new Date(); // IS THIS CORRECT FOR GETCURRENTYEAR
      const ageFrom = tvStartDate.getFullYear() - beeeeeeeerthday.getFullYear();
      const ageTo = tvEndDate.getFullYear() - beeeeeeeerthday.getFullYear();
      if (ageFrom === ageTo) {
        return `was ${ageFrom}`;
      } else {
        return `was ${ageFrom} to ${ageTo}`;
      }
    }
  } else {
    return 'Age unknown';
  }
};
