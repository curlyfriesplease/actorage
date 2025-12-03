
![HOWTA_logo_readme](https://github.com/curlyfriesplease/actorage/assets/81927768/8416b3af-998b-49da-aabc-f27c73b8cc1e)


## Actor age app

An app to show you how old an actor was, at the time of release of a movie or TV show.

See this app online here: https://actor.jonmulhern.co.uk

## Overall site setup

The site is made up of these three repos:


![actorAgeDiagram](https://github.com/curlyfriesplease/actorage/assets/81927768/a12477d1-3460-4d8b-b431-063d58cd74e3)


## Config

Within the root folder, create `.env.local` with
`REACT_APP_TMDB_API_KEY = 'ABCDE'`
`REACT_APP_TMDB_BEARER_TOKEN = 'ABC123'`
Found at https://www.themoviedb.org/settings/api once you've created an account

When hosting in Amplify, add these as environment variables.
