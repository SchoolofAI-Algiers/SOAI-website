import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
function App() {
  return (
    <>
      <Head>
        <title>SOAI website</title>
      </Head>
      {/* TO DO: replace background
      bg color just to see the Navbar */}
      <div className="bg-[#6a6491] justify-around items-center min-h-screen text-white">
        <Navbar />
        <h1 className="text-3xl font-bold underline"></h1>
      </div>
    </>
  );
}
export default App;
