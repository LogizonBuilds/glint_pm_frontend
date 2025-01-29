"use client";
import React from 'react'
import Button from '@/components/Button'
import CardWithButton from '@/components/CardWithButton'

type Props = {}

const Services = (props: Props) => {
    const [active, setActive] = React.useState(0)
    return (
        <>
            <div className="bg-[url('/images/image_services.png')] bg-cover bg-center h-[649px] w-full justify-center text-white">
                {/* <div className="absolute inset-0 bg-gray/80 z-0"></div> */}
                <div className="flex flex-col items-center text-center justify-center h-full w-full">
                    <p className="sm:text-[55px] text-[45px] font-inter-700">
                        Our Services
                    </p>
                    <div className="mt-8 flex justify-between w-1/3">
                        <Button text="Tech Solutions" noBg={active === 1} weight={255} height={52} onClick={() => setActive(0)} />
                        <Button text="Project Management" weight={255} noBg={active === 0} height={52} onClick={() => setActive(1)} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col mt-8 p-8'>
                <h1 className='text-[45px] font-inter-700'>
                    We are <strong className='text-primary'>Dedicated</strong> to <br /> serve you all time

                </h1>

            </div>

            <div className='p-[100px]'>
                <CardWithButton />
            </div>
        </>
    )
}

export default Services