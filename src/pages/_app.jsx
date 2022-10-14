import "/src/styles.css";
import Navbar from "../components/NavBar";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <Navbar />  */}
    <Component {...pageProps} />
    </>);
}
