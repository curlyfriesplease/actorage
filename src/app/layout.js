import "./globals.css";
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { dosis } from "./fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dosis.variable}>
      <body
        className={`${dosis.className} flex flex-col px-4 py-2 min-h-screen`}
      >
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
