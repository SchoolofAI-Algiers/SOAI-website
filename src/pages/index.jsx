import Head from "next/head";
import Galery2 from "../sections/galery2.jsx";
import Galery1 from "../sections/galery1.jsx";
import "swiper/css";
import "swiper/css/pagination";

import Navbar from "../components/Navbar.jsx";

function App() {
  return (
    <>
      <Head>
        <title>SOAI website</title>
      </Head>
      <Navbar />
      <div className="flex flex-col justify-around items-center min-h-screen text-white">
        <Galery1 />
        <Galery2 />
      </div>
    </>
  );
}
export default App;
