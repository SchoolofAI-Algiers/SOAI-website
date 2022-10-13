import React from 'react'

import Card from '../components/card2'

import { initalState as cards } from '../components/events';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/pagination";

export default function Galery2() {
    
  return (
    <div className='bg-white  w-10/12 flex flex-col text-black justify-center'>
     <div className='m-4 w-full flex justify-center'>
        <h1 className='text-5xl font-extrabold mt-12'>Main Events</h1>
     </div>
     <div className='h-4/12 mb-16 ' >
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
        className="w-full h-full swiper"
      >
            {
        
        cards  
        .map((card) => (
          <SwiperSlide>
          <Card key={card.idx} text={card.text} src={card.src} title={card.title}/>

          </SwiperSlide>
        ))
        }
     </Swiper>
     </div>


    

    </div>
  )
}
