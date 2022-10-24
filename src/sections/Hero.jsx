import Image from "next/image";

export default function Hero() {
  return (
    <div className="lg:flex justify-between lg:h-screen py-52 -mt-14 w-full lg:py-0 lg:-mt-0 bg-blue lg:bg-[url('/empty-bg.svg')] bg-cover bg-center">
      <div className="lg:w-5/12 lg:h-screen gap-y-10 flex flex-col items-center justify-center px-8 sm:px-16 lg:pr-10 lg:pl-16 lg:items-start">
        <div className="font-extrabold text-4xl w-full text-start sm:text-5xl text-white lg:text-blue">
          SCHOOL OF AI ALGIERS
        </div>
        <p className="font-semibold text-sm sm:text-lg text-white/80 lg:text-black/54 text-justify">
          School of Algiers is a local community of developers, students and
          lovers of artificial intelligence in Algeria and we are a specific
          club at the higher national school of computer science (ESI Algiers).
          We organize workshops like AI Day, hackathons like HAIck,
          international conferences like NeurIPS Algiers Meetup 2021 and many
          other amazing events.
        </p>
      </div>
      {/* Elements */}
      <div className="lg:flex flex-col hidden items-center absolute bottom-0 right-0 -space-y-60 justify-start">
        <img
          src="/brain-light.png"
          alt=""
          className="w-[200px] z-10 mb-1 ml-[300px] "
        />
        <img
          src="/brain.svg"
          alt=""
          className="w-[150px] ml-72 animate-brain-move z-20"
        />
        <img src="/empty-main.svg" alt="" className="w-[900px]" />
      </div>
      {/* Mobile image */}
      <div className="lg:hidden h-full w-full flex flex-col items-center mt-10 sm:mt-20 -mb-40 -space-y-40 sm:-space-y-48">
        <div className="animate-brain-move sm:w-fit w-28 z-10">
          <Image src="/brain.svg" alt="" width={150} height={150} />
        </div>
        <div className="">
          <Image src="/machine-mob.svg" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
