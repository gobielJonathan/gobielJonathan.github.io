import './app.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PageProvider } from './page.context';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <PageProvider>
        <Component {...pageProps} />
    </PageProvider>
}