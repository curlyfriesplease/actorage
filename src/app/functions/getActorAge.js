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
        <h3 className="text-red-400 text-2xl">Deddybones</h3>
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
        return (
          <h3
            className="
            md:text-3xl
            text-2xl
        "
          >
            was {age - 1}
          </h3>
        );
      }
      return (
        <h3
          className="
          md:text-3xl
            text-2xl
      "
        >
          was {age}
        </h3>
      );
    } else {
      const tvStartDate = new Date(tvFirstAirDate);
      const tvEndDate = tvLastAirDate ? new Date(tvLastAirDate) : new Date();
      const ageFrom = tvStartDate.getFullYear() - beeeeeeeerthday.getFullYear();
      const ageTo = tvEndDate.getFullYear() - beeeeeeeerthday.getFullYear();

      // This is to prevent it saying things like "was -1 years old" when they're on
      // something like SNL, which has a first_air_date long before when they were
      // actually on it
      if (ageFrom < 5) {
        return;
      }

      // For TV shows
      if (tvFirstAirDate && tvLastAirDate) {
        if (ageFrom === ageTo) {
          return (
            <h3
              className="
              md:text-3xl
              text-2xl
          "
            >
              was {ageFrom}
            </h3>
          );
        } else {
          return (
            <h3
              className="
              md:text-3xl
              text-2xl
            "
            >
              was {ageFrom} to {ageTo}
            </h3>
          );
        }
      }

      // Generally for TV shows without an end date, like Conan and SNL etc
      if (tvFirstAirDate) {
        return (
          <h3
            className="          
            md:text-3xl
            text-2xl
            "
          >
            was {ageFrom}
          </h3>
        );
      }
    }
  } else {
    return (
      <h3
        className="          
        md:text-3xl
        text-2xl
        "
      >
        Age unknown
      </h3>
    );
  }
};
