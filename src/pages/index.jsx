import { useState } from "react";
import Greetings from "../sections/Greetings.jsx";
import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
function App() {

  return (
    <>
      <Head>
        <title>SOAI website</title>

      </Head>
      {/* <div class="h-72 from-[#180d5b] to-white"> */}

      <div className="bg-[#180d5b]  justify-around items-center min-h-screen text-white">
           
            <Navbar /> 
            <h1 className="text-3xl font-bold underline">
           </h1>
       </div> 
    </>
  );
}

export default App;
