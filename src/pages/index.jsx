import Head from "next/head";
import Partners from "../sections/Partners.jsx";

function App() {
  return (
    <>
      <Head>
        <title>SOAI website</title>
      </Head>
      <div className="bg-gray-600 flex flex-col justify-around items-center min-h-screen text-white">
        <Partners />
      </div>
    </>
  );
}

export default App;
