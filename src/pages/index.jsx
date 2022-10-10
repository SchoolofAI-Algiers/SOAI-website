import { useState } from "react";

import Greetings from "../sections/Greetings.jsx";
import Head from "next/head";
import Galery2 from "../sections/galery2.jsx";
import Galery1 from "../sections/galery1.jsx";

function App() {

  return (
    <>
      <Head>
        <title>SOAI website</title>
      </Head>
      <div className="flex flex-col justify-around items-center min-h-screen text-white">
        <Greetings />
        <Galery1/>
        <Galery2/>
      </div>
    </>
  );
}

export default App;
