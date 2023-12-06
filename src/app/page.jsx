import { MainLogo } from '@/components/Misc/MainLogo';
import SearchContainer from '@/components/Search/SearchContainer';
import Script from 'next/script';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>How Old Was That Actor?</title>
      </Head>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FTXF5FMKJZ" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FTXF5FMKJZ');
        `}
        </Script>
      </div>
      <main
        className="
    flex 
    flex-col 
    h-100
    items-center 
    justify-start 
    p-9
    w-screen
    max-w-screen-md
    "
      >
        <MainLogo />
        <SearchContainer />
      </main>
    </>
  );
}
