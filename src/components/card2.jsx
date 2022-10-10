import React from 'react'

export default function Card({title ,src,text}) {
  return (
    <div className='shadow-lg shadow-eventBg  border bottom-2 rounded-md  border-eventBg flex flex-col  items-center w-9/12 md:w-full mx-auto md:mx-2 
     transition duration-200 ease-in transform sm:hover:scale-105'>
        <div className='bg-eventBg  w-3/5 mt-0 flex justify-center'>
            <h2 className='text-white text-lg'>{title}</h2>
        </div>
        <img className='mx-auto my-2' src={src} alt='logo' />
        <div className='bg-black w-10/12 h-0.5 mb-3'>
        </div>
        <p className='text-black text-base   p-4'>{text}</p>
    </div>
  )
}
