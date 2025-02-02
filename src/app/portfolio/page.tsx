import React from 'react'
import HeroPortFolio from '@/components/HeroPortFolio'
import CardWithButton from '@/components/CardWithButton'




const Portfolio = () => {
    const portfolios = [
        {
            img: "/images/blogimg.png",
            title: "Build Your API stack",
            content: "Lorem ipsum dolor sit amet consectetur.",
          },
          {
            img: "/images/blogimg.png",
            title: "Build Your API stack",
            content: "Lorem ipsum dolor sit amet consectetur.",
          },
          {
            img: "/images/blogimg.png",
            title: "Build Your API stack",
            content: "Lorem ipsum dolor sit amet consectetur.",
          },
          {
            img: "/images/blogimg.png",
            title: "Build Your API stack",
            content: "Lorem ipsum dolor sit amet consectetur.",
          },
          {
            img: "/images/blogimg.png",
            title: "Build Your API stack",
            content: "Lorem ipsum dolor sit amet consectetur.",
          },
          {
            img: "/images/blogimg.png",
            title: "Build Your API stack",
            content: "Lorem ipsum dolor sit amet consectetur.",
          },

    ]
  return (
    <>
    <HeroPortFolio/>
    <div className='m-16'>
        <h1 className='text-[40px] leading-[47px]'>Explore the wonder <br />
        of our other stunning projects.</h1>
    </div>
    <div className='m-16 grid md:grid-cols-3 grid-cols-1 gap-3 sm:grid-cols-2'>
        
        {
            portfolios.map((item, index) => (
                <div key={index} className='mb-4 flex justify-center'>

                    <CardWithButton id={index} imgSrc={item.img} title={item.title} content={item.content} btnText='Explore'  />
                </div>
            ))
        }
       

    </div>
    </>
    
  )
}

export default Portfolio