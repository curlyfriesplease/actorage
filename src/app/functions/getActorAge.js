export const getActorAge = (
  beeeeeeeerthday,
  releaseDate,
  tvFirstAirDate,
  tvLastAirDate,
  deathday
) => {
  if (deathday < releaseDate) {
    return (
      <>
        <h3 className="text-red-800 text-3xl">Deddybones</h3>
      </>
    );
  }
  if (beeeeeeeerthday) {
    const movieRelease = new Date(releaseDate);
    const age = movieRelease.getFullYear() - beeeeeeeerthday.getFullYear();
    if (releaseDate) {
      const monthDifference =
        movieRelease.getMonth() - beeeeeeeerthday.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
          movieRelease.getDate() < beeeeeeeerthday.getDate())
      ) {
        return <h3 className="text-pink-200 text-3xl">was {age - 1}</h3>;
      }
      return <h3 className="text-pink-200 text-3xl">was {age}</h3>;
    } else {
      const tvStartDate = new Date(tvFirstAirDate);
      const tvEndDate = tvLastAirDate ? new Date(tvLastAirDate) : new Date(); // IS THIS CORRECT FOR GETCURRENTYEAR
      const ageFrom = tvStartDate.getFullYear() - beeeeeeeerthday.getFullYear();
      const ageTo = tvEndDate.getFullYear() - beeeeeeeerthday.getFullYear();
      if (tvFirstAirDate && tvLastAirDate) {
        console.log("fdsfsdfd");
        console.log(tvFirstAirDate);
        console.log(tvLastAirDate);
        if (ageFrom === ageTo) {
          return <h3 className="text-pink-200 text-3xl">was {ageFrom}</h3>;
        } else {
          return (
            <h3 className="text-pink-200 text-3xl">
              was {ageFrom} to {ageTo}
            </h3>
          );
        }
      }
    }
    return <p>fdfd</p>;
  } else {
    console.log(`birthday value  ${beeeeeeeerthday} is falsy`);
    return <h3 className="text-pink-200 text-3xl">Age unknown</h3>;
  }
};
