import "./app.css";
import PageProvider from "./page.context";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
    </>
  );
}
