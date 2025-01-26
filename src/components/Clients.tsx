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