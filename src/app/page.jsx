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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FTXF5FMKJZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'GA_MEASUREMENT_ID');
    `}
      </Script>
      <main
        className="
    flex 
    flex-col 
    h-screen
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
