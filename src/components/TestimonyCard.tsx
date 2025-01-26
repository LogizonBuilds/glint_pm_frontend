import React from 'react'
import Image from 'next/image'

type Props = {
    text: string
    name: string
    role?: string
}

const TestimonyCard = ({ text, name, role }: Props) => {
    return (
        <div className='w-[387px] h-[250px] rounded-[16px] border-[1px] bg-[#EAF1FA]'>
            <div className='flex flex-col justify-start p-4'>
                <Image src={"/images/quote.png"} alt='quote' width={30} height={20} />
                <h1 className='mt-4'>
                    {text}
                </h1>

                <div className='flex flex-col bottom-0 top-0'>
                    <p className='font-bold'>
                        {name}
                    </p>
                    <p className=''>
                        {
                            role && role
                        }
                    </p>

                </div>


            </div>

        </div>
    )
}

export default TestimonyCard