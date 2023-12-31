import NavBar from '@/components/NavBar/NavBar';
import Head from 'next/head';

export default function aboutPage() {
  return (
    <>
      <Head>
        <title>About: How Old Was That Actor?</title>
      </Head>
      <link rel="canonical" href="https://www.howoldwasthat.actor"></link>
      <meta
        name="description"
        content="About page for How Old Was That Actor?"
      />
      <meta
        name="keywords"
        content="actors, entertainment, ages, old, young, hollywood, film, movies tv"
      />
      <NavBar />
      <div
        id="about-page-main-div"
        className="
        flex 
        flex-col 
        justify-center
        text-center
        text-sky-600
        text-lg
        p-5
        py-10
        max-w-lg
        "
      >
        <h1 className="text-center text-xl text-sky-800 font-extrabold">
          FAQs
        </h1>
        <h3 className="italic text-sky-700 pt-3">
          When are ages calculated from?
        </h3>
        <h3>
          The ages shown are calculated at the time the film was released, or TV
          show was first aired. These are data points that are available,
          whereas the exact dates a production was made are not something widely
          recorded.
        </h3>
        <h3 className="italic text-sky-700 pt-3">What is popularity sort?</h3>
        <h3>
          The popularity score metric is calculated by TMDB, and explained{' '}
          <a
            href="https://developer.themoviedb.org/docs/popularity-and-trending"
            className="font-extrabold"
          >
            here
          </a>
        </h3>
        <h3 className="italic text-sky-700 pt-3">
          Why are there sometimes more seasons than the actors appear in?
        </h3>
        <h3>
          Specials are sometimes counted as their own season in the grand total.
          This can lead to a TV show displaying something like &quot;11
          seasons&quot; when the actors show as starring in numbered seasons
          &quot;1 - 10&quot;.
        </h3>
        <h3 className="italic text-sky-700 pt-3">
          Why is there a limit of 21 actors per movie/show?
        </h3>
        <h3>
          To limit the amount of data that is fetched from TMDB. They kindly
          provide a free service offering the data, but it also means we are
          limited in how much can be obtained at once.
        </h3>
        <div>
          <h1 className="text-center text-xl text-sky-800 font-extrabold pt-7">
            Thanks to
          </h1>
          <a
            target="_blank"
            href="https://icons8.com/icon/44827/movie-projector"
          >
            Movie
          </a>
          Favicon courtesy of{' '}
          <a
            target="_blank"
            className="font-extrabold"
            href="https://icons8.com"
          >
            Icons8
          </a>
        </div>
        <div>
          Movie data courtesy of{' '}
          <a className="font-extrabold" href="https://www.themoviedb.org/">
            TMDb
          </a>
        </div>
        <div>
          Loading spinner courtesy of{' '}
          <a href="https://loading.io/" className="font-extrabold">
            Loading.io
          </a>
        </div>
        <h1 className="text-center text-xl text-sky-800 font-extrabold pt-7">
          Say hello
        </h1>
        <h3>
          <a href="mailto:jmcsapp@gmail.com" className="font-extrabold">
            jmcsapp@gmail.com
          </a>
        </h3>
      </div>
    </>
  );
}
