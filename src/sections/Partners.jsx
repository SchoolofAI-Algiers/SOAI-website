import Partner from "../components/Partners/Partner";
import Map from "../components/Partners/Map";

export default function Partners() {
  return (
    <div className="flex min-h-screen flex-col pt-44 justify-center items-center">
      <div className="font-['Open Sans'] mb-8 font-extrabold text-4xl md:text-5xl text-blue">
        Our Partners
      </div>
      <div className="flex justify-center items-center">
        <Map />
        <div className="flex sm:absolute sm:flex-row flex-col sm:-mt-16 sm:gap-x-16 md:gap-x-28">
          <div className="">
            <Partner
              image="/NeurIPS.png"
              url="https://nips.cc/"
              title="NeurIPS"
            />
          </div>
          <div>
            <Partner
              image="/Zindi.png"
              url="https://zindi.africa/"
              title="Zindi"
            />
          </div>
          <div>
            <Partner
              image="/aimx.png"
              url="https://web.facebook.com/AIMxOfficial/?_rdc=1&_rdr"
              title="Aimx"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
