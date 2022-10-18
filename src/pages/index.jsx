import Head from "next/head";
import Partners from "../sections/Partners.jsx";

function App() {
  return (
    <>
      <Head>
        <title>SOAI website</title>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-gray-600 flex flex-col justify-around items-center min-h-screen text-white">
        <Partners />
      </div>
    </>
  );
}

export default App;
