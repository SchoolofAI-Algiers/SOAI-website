import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { RiMapPin2Fill, RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/SchoolofAIAlgiers/",
    icon: <FaFacebook size={30}></FaFacebook>,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/soai_algiers",
    icon: <RiInstagramFill size={30}></RiInstagramFill>,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/school-of-ai-algiers/",
    icon: <FaLinkedin size={30}></FaLinkedin>,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/soaialgiers",
    icon: <FaTwitter size={30}></FaTwitter>,
  },
  {
    name: "Youtube",
    link: "https://m.youtube.com/channel/UChFa3XnZYZ94tkjfJ5CnPOA",
    icon: <FaYoutube size={30}></FaYoutube>,
  },
];

const infos = [
  {
    href: "https://www.google.com/maps/place/Ecole+Nationale+Sup%C3%A9rieure+d'Informatique+(Higher+School+for+Computer+Science)/@36.7050299,3.1739156,15z/data=!4m5!3m4!1s0x0:0x215c157a5406653c!8m2!3d36.7050299!4d3.1739156",
    name: "Place",
    icon: <RiMapPin2Fill size={20}></RiMapPin2Fill>,
    content:
      "Higher National School of Computer Science (ESI - Alger) Oued Smar, Alger",
  },
  {
    href: "mailto:schoolofai.algiers@esi.dz",
    name: "Mail",
    icon: <MdMail size={20}></MdMail>,
    content: "schoolofai.algiers@esi.dz",
  },
  {
    href: "tel:+213666636252",
    name: "Phone",
    icon: <BsFillTelephoneFill size={20}></BsFillTelephoneFill>,
    content: "+213 667 271 665",
  },
];

export function Contact() {
  return (
    <div className="flex flex-col items-end">
      <div className="mr-16 mt-5 lg:mt-0">
        <ScrollToTop />
      </div>
      <div className="bottom-0 z-10 mt-8 w-full bg-blue px-10 pt-16 text-white">
        <div className="mx-6 gap-x-10 pb-16 sm:mx-0 sm:grid sm:grid-cols-2">
          {/* contact */}
          <div className="mb-16 flex flex-col items-center sm:m-0">
            <div className="pb-10 text-4xl font-bold">Contact us</div>
            <div className="flex flex-col gap-y-4 font-medium">
              {infos.map((info, i) => (
                <a
                  href={info.href}
                  key={i}
                  className="flex items-center gap-x-4 text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div className="">{info.content}</div>
                </a>
              ))}
            </div>
          </div>
          {/* social media */}
          <div className="mb-8 flex flex-col items-center sm:m-0">
            <div className="pb-10 text-4xl font-bold">Follow us</div>
            <div className="flex gap-x-6">
              {socials.map((social, i) => (
                <div key={i} className="flex items-center justify-center">
                  <a href={social.link} target="_blank" rel="noreferrer">
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h5 className="bottom-0 pr-4 pb-8 text-center text-xs font-medium sm:text-right">
          © 2022 School of AI - Algiers. All rights reserved.
        </h5>
      </div>
    </div>
  );
}
