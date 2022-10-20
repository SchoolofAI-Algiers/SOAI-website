import Image from "next/image";

export default function Goals() {
  return (
    <div className="bg-blue sm:grid mt-20 grid-cols-5 py-16 lg:py-0 lg:h-screen text-white">
      <div className="col-span-2 ml-20 mt-20 hidden lg:ml-0 sm:flex items-center justify-end">
        <Image src="/goal.svg" width={400} height={400} />
      </div>
      <div className="col-span-3 sm:px-[20%] px-12 lg:px-24 space-y-12 lg:space-y-20 flex justify-center items-center flex-col">
        <div className="text-4xl lg:text-5xl font-extrabold text-left sm:w-full">
          Our goals
        </div>
        <ul className="list-disc flex-col lg:pr-24 text-lg lg:text-2xl space-y-2 marker:text-cyan lg:marker:text-2xl break-words">
          <li>Help you start your journey in AI</li>
          <li>
            Improve your skills in programmation, research and solve problems
            using AI
          </li>
          <li>Learn new technologies and recent innovations in the AI field</li>
        </ul>
      </div>
    </div>
  );
}
