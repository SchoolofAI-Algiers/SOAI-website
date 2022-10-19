export default function Hero() {
  return (
    <div className="lg:h-screen py-44 lg:py-0 w-full lg:bg-[url('/hero.svg')] flex flex-col lg:items-start items-center bg-cover bg-center">
      <div className="lg:w-2/5 h-full gap-y-10 flex flex-col items-center justify-center px-8 sm:px-16 lg:pr-10 lg:pl-16">
        <div className="font-extrabold text-4xl w-full text-start sm:text-5xl text-blue">
          SCHOOL OF AI ALGIERS
        </div>
        <p className="font-semibold text-sm sm:text-lg text-black/54 text-justify">
          School of Algiers is a local community of developers, students and
          lovers of artificial intelligence in Algeria and we are a specific
          club at the higher national school of computer science (ESI Algiers).
          We organize workshops like AI Day, hackathons like Haick,
          international conferences like NeurIPS Algiers Meetup 2021 and many
          other amazing events.
        </p>
      </div>
    </div>
  );
}
