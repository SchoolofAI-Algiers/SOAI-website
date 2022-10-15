
import Head from 'next/head'
import Image from 'next/image'

const partner =({image,url,title})=>{
    return(
        
        <div className='group object-scale-down items-center justify-center pt-5  hover:opacity-95 hover:drop-shadow-md '>
        <a href={url}>
        <Image src={image} alt={title} className='transition delay-100 scale-[50%] group-hover:scale-[53%] group-hover:-translate-y-6'/>
       
        </a>
       <div className=' -translate-y-4 opacity-0 transition delay-100 font-[Georgia] font-bold text-[#002147] md:text-4xl group-hover:translate-y-1 group-hover:opacity-100'>
        {title}
       </div>
        </div>
       
        
        
    )
}

export default partner