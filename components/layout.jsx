import Head from "next/head";

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

      <header className="d-flex align-items-center py-2 px-4">
        <div className="ml-auto d-flex" style={{ columnGap: "1rem" }}>
          <div className="linked-in">
            <a
              style={{ fontSize: "2rem" }}
              target="_blank"
              href="https://www.linkedin.com/in/jonathan-gobiel/"
            >
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>

          <div className="github">
            <a
              style={{ fontSize: "2rem" }}
              target="_blank"
              href="https://github.com/gobielJonathan/"
            >
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
