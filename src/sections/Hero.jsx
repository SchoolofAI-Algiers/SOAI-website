export default function Hero() {
  return (
    <div className="h-screen w-full bg-[url('/hero.svg')] bg-cover bg-center">
      <div className="w-1/2 h-full flex flex-col items-start justify-center pl-5 ">
        <h1 className="font-bold text-2xl mb-1.5  ">SCHOOL OF AI ALGIERS</h1>
        <p className="font-semibold w-3/4 text-lg text-black/54">
          School of Algiers is a local community of developers, students and
          lovers of artificial intelligence in Algeria and we are a specific
          club at the higher national school of computer science (ESI
          Algiers).We organize workshops like AI Day , hackathons like
          Haick,international conferences like NeurIPS Algiers Meetup 2021 and
          many other amazing events.
        </p>
      </div>
    </div>
  );
}
