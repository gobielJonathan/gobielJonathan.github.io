import Head from "next/head";
import DarkMode from "./dark-mode";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Gobiel's Profile, Bina Nusantara, Computer Science, Tokopedia Software Engineer Web Platform"
        />
        <meta name="robots" content="index, archieve" />
        <link rel="canonical" href="https://gobiel.vercel.app/" />
      </Head>

      <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 flex items-center p-2">
        <div className="ml-auto">
          <DarkMode />
        </div>
      </header>
      <main className="bg-white dark:bg-slate-800">{children}</main>
    </>
  );
}
