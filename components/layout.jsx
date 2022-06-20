import Head from "next/head";
import ArrowPage from "./arrow-page";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="Gobiel's Profile, Bina Nusantara, Computer Science, Tokopedia Software Engineer Web Platform"
        />
        <meta name="robots" content="index, archieve" />
        <link rel="canonical" href="https://gobiel.vercel.app/" />
      </Head>

      <main>{children}</main>
    </>
  );
}
