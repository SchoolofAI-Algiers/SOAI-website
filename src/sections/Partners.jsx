import Partner from "../components/Partners/Partner";
import Map from "../components/Partners/Map";

export default function Partners() {
  return (
    <div className="flex pt-10 lg:pt-16 pb-20 lg:pb-auto flex-col justify-center items-center">
      <div className="mb-10 font-extrabold text-4xl sm:text-5xl text-blue">
        Our Partners
      </div>
      <div className="flex justify-center items-center">
        <Map />
        <div className="flex sm:absolute sm:flex-row flex-col sm:-mt-36 sm:gap-x-16 md:gap-x-28 gap-y-8">
          <Partner
            image="/NeurIPS.png"
            url="https://nips.cc/"
            title="NeurIPS"
          />
          <div>
            <Partner
              image="/zindi.png"
              url="https://zindi.africa/"
              title="Zindi"
            />
          </div>
          <div>
            <Partner
              image="/aimx.png"
              url="https://web.facebook.com/AIMxOfficial/?_rdc=1&_rdr"
              title="AIMx"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
