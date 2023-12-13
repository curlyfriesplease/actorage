import './globals.css';
import 'tailwindcss/tailwind.css';
import { dosis } from './fonts';

export const metadata = {
  title: 'How old was that actor?',
  description:
    'Find the ages of your favourite actors in your least favourite performances',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dosis.variable}>
      <body
        className={`${dosis.className}
          flex flex-col 
          items-center
          px-4
          py-2
          min-h-screen`}
      >
        <main
          className="
        grow 
        py-3 
        max-w-screen-lg
        "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
