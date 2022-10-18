import Image from "next/image";

export default function Map() {
  return (
    <div className="hidden sm:block relative lg:h-[500px] lg:w-[900px] md:h-[300px] md:w-[750px] sm:h-[300px] sm:w-[600px]">
      <Image
        layout="fill"
        objectFit="contain"
        src="/Globe.png"
        alt=""
        priority
        className="md:opacity-80"
      />
    </div>
  );
}
