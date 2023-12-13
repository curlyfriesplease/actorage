import { MainLogo } from '@/components/Misc/MainLogo';
import SearchContainer from '@/components/Search/SearchContainer';
import Script from 'next/script';
import Head from 'next/head';
import { PopularTitles } from '@/components/PopularTitles/PopularTitles';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div
      id="the-big-biscuit"
      className="
      h-screen 
      flex 
      flex-col
      justify-between 
      w-max
     "
    >
      <Head>
        <title>How Old Was That Actor?</title>
      </Head>
      <div
        className="
        main-container
        flex 
        flex-col
        h-full
      "
      >
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FTXF5FMKJZ" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FTXF5FMKJZ');
        `}
        </Script>

        <main
          className="
          flex 
          flex-col
          items-center 
          justify-around 
          pl-7
          pr-7
          pb-8
          w-screen
          max-w-screen-md
          h-full
            "
        >
          <div
            id="logo-and-search"
            className="
            flex 
            flex-col 
            items-center 
            h-1/2
            w-full
                "
          >
            <MainLogo />
            <SearchContainer />
          </div>
          <PopularTitles />
        </main>
      </div>
      <Footer />
    </div>
  );
}
