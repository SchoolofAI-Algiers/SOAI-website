import Card from "../components/card2";

import { initalState as cards } from "../components/events";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Galery2() {
  return (
    <div className="bg-white justify-center min-h-screen w-5/6 flex flex-col text-black">
      <div className="text-5xl text-center -mt-6 mb-10 font-extrabold">
        Main Events
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="w-full grid"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.idx} className="flex">
            <Card text={card.text} src={card.src} title={card.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
