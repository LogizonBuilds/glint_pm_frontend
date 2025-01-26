import React from 'react'
import Image from 'next/image'

type Props = {}

const Stats = (props: Props) => {
    return (
        <div className='md:h-[310px] h-[400px] bg-[#F5F7FA] py-12 flex justify-center items-center'>
            <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-36 gap-6'>
                <div className='items-center sm:mt-0 mt-6'>
                    <h1 className='text-[36px] leading-[44px] '>
                        Helping a local business <br /><strong className='text-secondary'> reinvent itself </strong>
                    </h1>

                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-12 gap-6'>
                    <div className='flex flex-col'>

                        <div className='flex'>
                            <div className='mx-4'>
                                <Image src={'/images/group.png'} alt='group' width={40} height={40} />

                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-inter-700 text-[24px]'>2,245,341</h1>
                                <p className='text-[12px] font-inter-200'>Rating</p>

                            </div>

                        </div>
                        <div className='flex'>
                            <div className='mx-4'>
                                <Image src={'/images/project.png'} alt='group' width={40} height={30} />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-inter-700 text-[24px]'>2,245,341</h1>
                                <p className='text-[12px] font-inter-200'>Rating</p>

                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col'>

                        <div className='flex'>
                            <div className='mx-4'>
                                <Image src={'/images/hands.png'} alt='group' width={40} height={30} />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-inter-700 text-[24px]'>2,245,341</h1>
                                <p className='text-[12px] font-inter-200'>Rating</p>

                            </div>

                        </div>
                        <div className='flex'>
                            <div className='mx-4'>
                                <Image src={'/images/payment.png'} alt='group' width={40} height={30} />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='font-inter-700 text-[24px]'>2,245,341</h1>
                                <p className='text-[12px] font-inter-200'>Rating</p>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Stats