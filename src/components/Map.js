import Image from "next/image";
import Globe from "Globe.png"

const Map =()=>{
    return(
        <div className='py-2 hidden md:block md:relative '>
        <Image src={Globe} className=' scale-[0%] opacity-0 md:opacity-80 md:scale-90 '/>
      </div>

    )
}
export default Map