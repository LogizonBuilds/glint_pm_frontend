import React from 'react'



const HeroPortFolio = () => {
  return (
    <div className="bg-[url('/images/hero_bg.png')] bg-cover bg-center h-screen w-full justify-center text-white">
      {/* <div className="absolute inset-0 bg-gray/80 z-0"></div> */}
      <div className="flex flex-col items-center text-center justify-center h-full w-full">
        <p className="sm:text-[40px]  text-[40px] font-inter-700 text-[#FFFFFF] text-center">
        Here’s a little more about how we  <br />operate. Got a more specific question? <br />Feel free to get in touch.
        </p>
      </div>
    </div>
  )
}

export default HeroPortFolio