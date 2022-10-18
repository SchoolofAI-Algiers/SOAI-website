import Image from "next/image";

export default function Partner({ image, url, title }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center pt-12 justify-center hover:opacity-95 hover:drop-shadow-md"
    >
      <Image
        layout="fill"
        objectFit="contain"
        src={image}
        alt={title}
        className="transition delay-100 sm:group-hover:scale-[60%] sm:group-hover:-translate-y-6"
      />
      <div className="-translate-y-4 opacity-0 transition delay-100 font-[Georgia] font-bold text-[#002147] text-2xl sm:text-4xl md:text-5xl sm:group-hover:translate-y-1 sm:group-hover:opacity-100">
        {title}
      </div>
    </a>
  );
}
