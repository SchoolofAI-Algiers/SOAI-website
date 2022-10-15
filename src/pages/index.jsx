import { useState } from "react";
import Greetings from "../sections/Greetings.jsx";
import Head from "next/head";
import Hero from "../Hero.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>SOAI website</title>
      </Head>
      <Hero />
    </>
  );
}

export default App;
