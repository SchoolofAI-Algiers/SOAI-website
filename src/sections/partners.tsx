import Head from 'next/head'
import Image from 'next/image'
import NeurIPS from 'NeurIPS.png'
import Aimx from "aimx.png"
import Zindi from "Zindi.png"
import Partner from '../components/partner'
import Globe from 'Globe.png'

export default function Partners() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center p-3 ">
        <h1 className="font-['Open Sans'] font-semibold text-3xl md:text-6xl ">
          Our Partners
        </h1>
        <div className='py-2 hidden md:block md:relative '>
          <Image src={Globe} className=' scale-[0%] opacity-0 md:opacity-80 md:scale-90 '/>
        </div>
        <div className="scale-[80%] relative md:grid grid-cols-3 gap-5 items-center justify-center md:absolute  "  >

          <div className='lg:-translate-y-10'>
         <Partner image={NeurIPS} url='https://nips.cc/' title='NeurIPS'></Partner>
         </div>
          
          <div className=' translate-x-4 translate-y-2 lg:translate-x-10 lg:-translate-y-4'>
          <Partner image={Zindi} url='https://zindi.africa/' title='Zindi'></Partner>
          </div>

          <div className=' lg:mr-5 lg:mt-5 md:-translate-x-4 md:-translate-y-4 lg:-translate-y-10 '>
          <Partner image={Aimx} url='https://web.facebook.com/AIMxOfficial/?_rdc=1&_rdr' title='Aimx'></Partner>
          </div>
       
        </div>
       
      </main>

      
    </div>
  )
}


