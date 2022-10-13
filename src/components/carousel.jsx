import React, { useState } from 'react'
import Card from './card2';
import { initalState } from './events';

export default function Carousel() {
    const [cards, setCards] = useState(initalState);

    const handleLeftClick = (isLeft) => {
        const prevState = [...cards];

        // reset
        const first = prevState.find((f) => f.active == true)
        if ( first.idx!==1){
          
          // update'
          console.log(first.idx-1,'***',first.idx+3);
          prevState[first.idx-2].active =true;
          prevState[first.idx+2].active = false;
      
          // update state
          setCards(prevState);
  
        }
    };
  
    const handleRightClick = (e) => {
        console.log(e);
      const prevState = [...cards];
      let n;
      if (e.pageX>1280) n=4
      else if ( e.pageX>720) n=3
      else if (e.pageX>520) n=2
      else n=1;
      // reset
      const first = prevState.find((f) => f.active == true)
    //  if (!( first.idx > cards.length-4)){
        first.active = false;
        // update
       
        prevState[first.idx+n-1].active = true;
    
        // update state
        setCards(prevState);

   //   }

    };

    const mdScreen = () =>{
        const prevState = [...cards];

        // reset
        const first = prevState.find((f) => f.active == true);
        prevState[first.idx+3].active=false;
        console.log('hiiiii');
              // update state
        setCards(prevState);

    }
    
    const lgScreen = () =>{
        const prevState = [...cards];

        // reset
        const first = prevState.find((f) => f.active == true);
        prevState[first.idx+3].active=true;

    }
  return (
    <div className='flex justify-center items-center'>
       <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleLeftClick()}
      >
        {"<"}
      </div>
      <div className={`grid  sm:grid-cols-2  mx-4 my-6 md:grid-cols-3
       lg:grid-cols-4 gap-x-6 gap-y-4  xl:w-10/12  md:${mdScreen()} `}>
      {
        
        cards
        .filter((f) => f.active === true)
        .map((card) => (
            <Card key={card.idx}
                title={card.idx} 
                src={card.src}
                text={card.text}
                />
        ))}

     </div>
      
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={(e) => handleRightClick(e)}
      >
        {">"}
      </div>

    </div>
  
  )
}
