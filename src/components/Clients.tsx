// import React from "react";
// import Image from "next/image";

// const Clients = () => {
//   const data = [
//     {
//       name: "Megan Murphy",
//       title: "ECO",
//       content:
//         "The support team is phenomenal, and the tools are game-changing. I can’t imagine managing our workflow without them anymore!",
//     },
//     {
//       name: "Megan Murphy",
//       title: "ECO",
//       content:
//         "From start to finish, the experience has been seamless. Their solutions help us save time, reduce costs, and consistently exceed project goals.",
//     },
//     {
//       name: "Megan Murphy",
//       title: "ECO",
//       content:
//         "From start to finish, the experience has been seamless. Their solutions help us save time, reduce costs, and consistently exceed project goals.",
//     },
//   ];
//   return (
//     <div className="h-[100vh] w-full">
//       <div className="h-[30%] w-full pt-4 flex justify-center items-center">
//         <p className="text-center text-4xl font-bold">Why Clients Love Us</p>
//       </div>
//       <div className="h-[60%] w-full flex justify-around">
//         {data.map((items, index) => (
//           <div key={index} className="bg-[#EAF1FA80] h-60 w-[30%] rounded-lg p-4">
//             <div className="h-[20%]">
//               <Image
//                 className="relative top-4"
//                 alt=""
//                 src={"/images/note.png"}
//                 width={30}
//                 height={30}
//               />
//             </div>
//             <div className="h-[60%] py-2">
//               <p className="text-md text-[#032253C2]">{items.content}</p>
//             </div>
//             <div className="h-[20%]">
//               <p className="text-[#012754C2] text-xl font-extrabold">
//                 {items.name}
//               </p>
//               <p className="text-[#032253C2]">{items.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Clients;

import React from 'react'
import TestimonyCard from "@/components/TestimonyCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {}

const Clients = (props: Props) => {
    const dummyTestimonies = [
        {
            text: "Great Company",
            name: "Ayobami Alaran",
            role: "CTO Logizon"
        },
        {
            text: "Great Company",
            name: "Ayobami Alaran",
            role: "CTO Logizon"
        },
        {
            text: "Great Company",
            name: "Ayobami Alaran",
            role: "CTO Logizon"
        },
        {
            text: "Great Company",
            name: "Ayobami Alaran",
            role: "CTO Logizon"
        }

    ]
    return (
        <div className='flex justify-center items-center mt-6'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-6xl"
            >
                <CarouselContent>
                    {
                        dummyTestimonies.map((testimony: any, index: number) => (
                            <CarouselItem key={index} className="md:basis-1/8 lg:basis-1/8 basis-1/8 rounded-full">
                                <TestimonyCard text={testimony.text} name={testimony.name} role={testimony.role} />

                            </CarouselItem>

                        ))
                    }
                </CarouselContent>
                {
                    dummyTestimonies && dummyTestimonies.length > 3 && (
                        <>
                            <CarouselPrevious />
                            <CarouselNext />
                        </>
                    )

                }

            </Carousel>
        </div>
    )
}

export default Clients

