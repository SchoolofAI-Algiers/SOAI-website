import Partner from "../components/Partner";
import Map from "../components/Map";

export default function Partners() {
  return (
    <div className="flex min-h-screen justify-center flex-col items-center">
      <h1 className="font-['Open Sans'] mb-8 z-10 font-semibold text-4xl md:text-6xl ">
        Our Partners
      </h1>
      <div className="flex justify-center items-center">
        <Map />
        <div className="flex sm:flex-row flex-col gap-x-24">
          <Partner
            image="/NeurIPS.png"
            url="https://nips.cc/"
            title="NeurIPS"
          />
          <Partner
            image="/Zindi.png"
            url="https://zindi.africa/"
            title="Zindi"
          />
          <Partner
            image="/aimx.png"
            url="https://web.facebook.com/AIMxOfficial/?_rdc=1&_rdr"
            title="Aimx"
          />
        </div>
      </div>
    </div>
  );
}
