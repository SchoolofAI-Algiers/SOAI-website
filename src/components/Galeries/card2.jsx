export default function Card({ title, src, text }) {
  return (
    <div
      className="shadow-md mt-12 shadow-eventBg mb-14 border rounded-md border-eventBg flex flex-col items-center w-3/4 md:w-full mx-auto md:mx-2 
    transition duration-200 ease-in transform sm:hover:scale-105"
    >
      <div className="text-white text-lg text-center w-3/5 bg-eventBg">
        {title}
      </div>
      <div className="h-1/2 flex items-center justify-center">
        <img className="mx-auto my-2 p-4" src={src} alt="logo" />
      </div>
      <div className="bg-black w-5/6 h-0.5 mb-3"></div>
      <p className="text-xs text-justify p-4">{text}</p>
    </div>
  );
}
