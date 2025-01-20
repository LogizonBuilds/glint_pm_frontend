import React from 'react'
import Button from './Button'

type Props = {}

const Enquiry = (props: Props) => {
    return (
        <div className='flex w-full h-[253px] bg-[#F5F7FA] mt-[54px] items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div>

                    <h1 className='text-center font-inter-600 text-[36px]'>
                        Have Any Project in mind?
                    </h1>
                </div>

                <div className='mt-4'>

                    <Button text='Enquire Now' weight={255} height={52} />
                </div>


            </div>

        </div>
    )
}

export default Enquiry