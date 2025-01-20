import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='left-0 w-full lg:h-[314px] h-[408px] bottom-0 mt-20 p-12 bg-other border-1'>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
                <div>Logo</div>
                <div>Contact</div>
                <div>Service</div>
                <div>Support</div>
                <div className='col-span-2'>Lets Work</div>

            </div>

        </footer>
    )
}

export default Footer