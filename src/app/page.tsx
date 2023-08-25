
import About from "./about/page";
import { Contact } from "./contact/contact";
import { Hero } from "./hero/hero";
import './globals.css'
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <main className="container">
        <Hero />
        <About />

        <Contact />
      </main>
    </>
  );
}
