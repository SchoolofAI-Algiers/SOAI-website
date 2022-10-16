import Image from "next/image";

export default function Map() {
  return (
    <div className="hidden sm:block bg-red-200 h-[800px]">
      <Image
        layout="fill"
        objectFit="contain"
        src="/Globe.png"
        alt=""
        className="md:opacity-80"
      />
    </div>
  );
}
