import React from 'react'
import Card from '../components/card2'

export default function Galery2() {
    const Cards =[
        {
          id:1,
          title: 'AI Day ',
          src : 'ai-day.png',
          text:'Ai day is full journy of workshops and talks for both beginers and advanced people so throw this yearly event students will learn more AI technolgies  and its subFileds'
        },
        {
            id:2,
            title: 'AI Day ',
            src : 'ai-day.png',
            text:'Ai day is full journy of workshops and talks for both beginers and advanced people so throw this yearly event students will learn more AI technolgies  and its subFileds'
        
        },
          {
            id:3,
            title: 'AI Day ',
            src : 'ai-day.png',
            text:'Ai day is f beginers and advanced people so throw this yearly event students will learn more AI technolgies  and its subFileds'
        },
          {
            id:4,
            title: 'AI Day ',
            src : 'ai-day.png',
            text:'Ai day is full journy of workshops and talks for both full journy of workshops and talks for both beginers and advanced people so throw this yearly event students will learn more AI technolgies  and its subFileds'
        },
    ]
  return (
    <div className='flex flex-col justify-around  text-black items-center min-h-screen bg-white'>
     <div className='m-4'>
        <h1 className='text-5xl font-extrabold mt-12'>Main Events</h1>
     </div>
     <div className='grid  sm:grid-cols-2  mx-4 my-6 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4  xl:w-10/12  '>
   {  Cards.map((card)=> (

       <Card key={card.id}
       title={card.title} 
       src={card.src}
       text={card.text}
        />
     ))
   }
     </div>

    </div>
  )
}
