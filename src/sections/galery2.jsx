import React from 'react'

import Card from '../components/card2'
import Carousel from '../components/carousel'
import Swip from '../components/swiper'
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
          <SwiperSlide key={card.idx} className='mb-12 swiper-slide' >
     <div className='shadow-lg mt-12 shadow-eventBg      border bottom-2 rounded-md  border-eventBg flex flex-col  items-center w-9/12 md:w-full mx-auto md:mx-2 
     transition duration-200 ease-in transform sm:hover:scale-105'>
        <div className='bg-eventBg  w-3/5 mt-0 flex justify-center'>
            <h2 className='text-white text-lg'>{card.title}</h2>
        </div>
        <img className='mx-auto my-2' src={card.src} alt='logo' />
        <div className='bg-black w-10/12 h-0.5 mb-3'>
        </div>
        <p className='text-black text-sm   p-4'>{card.text}</p>
        </div>
    </SwiperSlide>
        ))
        }
     </Swiper>
     </div>


    

    </div>
  )
}
