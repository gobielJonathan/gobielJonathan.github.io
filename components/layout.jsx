import Head from "next/head";
import Dot from "./dot";

export default function Layout({
    children,
    title,
}) {
    return <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
        </Head>

        <main>
            <Dot />
            {children}
        </main>
    </>
}