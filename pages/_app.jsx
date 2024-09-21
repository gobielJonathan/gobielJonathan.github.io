import { Poppins } from "next/font/google";
import Script from "next/script";

import "./app.css";

const poppins = Poppins({
  weight: ["100", "300", "700", "900"],
  subsets: ["latin"],
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
        `,
        }}
      />

      <style jsx global>
        {`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  );
}
