import React from 'react'
import Image from 'next/image'

type Props = {}

function WhoWeAre({ }: Props) {
    return (
        <>
            <div className='text-center flex justify-center items-center py-6 px-12'>
                <h1 className='text-[48px] font-inter-800 font-bold'>Who We Are</h1>

            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3  grid-cols-1 gap-0'>
                <div className='py-12 px-12'>
                    <Image src='/images/busines.png' alt='whoweare' width={500} height={500} />

                </div>
                <div className='flex flex-col md:col-span-2 sm:py-12 px-12'>
                    <p>We are a team of innovators, strategists, and problem-solvers passionate about redefining the way projects are managed</p>
                    <p className='my-4'>Our goal is to empower teams with technology-driven solutions that enhance productivity, foster collaboration, and deliver impactful results</p>
                    <p className='my-4'>Our core, we are builders of efficient systems and creators of innovative tools. We believe that every project has the potential to transform ideas into extraordinary achievements, and we’re here to make that journey seamless and successful.</p>
                    <p className='mt-4'>We are more than a tech company; we are a partner in your growth. Our focus is on helping you overcome challenges, optimize processes, and achieve your goals with confidence.</p>


                </div>
            </div>
        </>

    )
}

export default WhoWeAre