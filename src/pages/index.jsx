import Head from "next/head";
import Galery2 from "../sections/Galery2.jsx";
import Galery1 from "../sections/Galery1.jsx";
import "swiper/css";
import "swiper/css/pagination";
import { Element } from "react-scroll";

import Navbar from "../components/Navbar.jsx";

function App() {
  return (
    <>
      <Head>
        <title>SOAI website</title>
      </Head>
      <Navbar />
      <Element name="Talks">
        <Galery1 />
      </Element>
      <Element name="Events">
        <Galery2 />
      </Element>
    </>
  );
}
export default App;
