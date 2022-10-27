import Head from "next/head";
import Partners from "../sections/Partners.jsx";
import Hero from "../sections/Hero";
import Galery2 from "../sections/Galery2.jsx";
import Galery1 from "../sections/Galery1.jsx";
import { Element } from "react-scroll";
import Navbar from "../components/Navbar.jsx";
import { Contact } from "../sections/Contact.jsx";
import Goals from "../sections/Goals.jsx";

function App() {
  return (
    <>
      <Head>
        <title>School Of AI Algiers</title>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      <Element name="Home">
        <Hero />
      </Element>
      <Element name="Talks">
        <Galery1 />
      </Element>
      <Element name="Goals">
        <Goals />
      </Element>
      <Element name="Partners">
        <Partners />
      </Element>
      <Element name="Events">
        <Galery2 />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
    </>
  );
}
export default App;
