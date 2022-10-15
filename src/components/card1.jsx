export default function Card1({ title, text, all }) {
  return (
    <div
      className={`col-span-1 border border-1 
     border-eventBg rounded-md shadow-md shadow-eventBg flex flex-col justify-around ${
       all ? "md:row-span-2" : "row-span-1"
     } 
     transition duration-200 ease-in transform sm:hover:scale-105`}
    >
      <div className="m-4 mx-auto">
        <img src="/ai-day.png" />
      </div>
      <div className="pl-4">
        <h1 className="text-2xl font-semibold text-blue">{title}</h1>
        <p className="text-base text-black mb-3 mt-2">{text}</p>
      </div>
    </div>
  );
}
