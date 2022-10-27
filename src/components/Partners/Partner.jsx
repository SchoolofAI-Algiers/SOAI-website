export default function Partner({ image, url, title }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group space-y-6 relative flex items-center justify-center hover:opacity-95 hover:drop-shadow-md"
    >
      <img
        src={image}
        alt={title}
        className="transition absolute fill-current delay-100 sm:group-hover:scale-[60%] sm:group-hover:-translate-y-6 md:group-hover:-translate-y-12 object-contain"
      />
      <div className="-translate-y-4 opacity-0 transition delay-100 font-[Georgia] font-bold text-[#002147] text-2xl sm:text-4xl md:text-5xl xl:text-6xl sm:group-hover:translate-y-1 sm:group-hover:opacity-100">
        {title}
      </div>
    </a>
  );
}
