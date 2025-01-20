import React from 'react'
import Image from 'next/image'
type Props = {}

const Footer = (props: Props) => {
    const socials = [

        {
            name: 'twitter',
            url: 'https://www.twitter.com/glintpm',
            img: '/images/twiter.png'
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/glintpm',
            img: '/images/instagram.png'
        },
        // {
        //     name: 'linkedin',
        //     url: 'https://www.linkedin.com/glintpm'
        // },
        {
            name: 'youtube',
            url: 'https://www.youtube.com/glintpm',
            img: '/images/youtube.png'
        }
    ]
    return (
        <footer className='left-0 w-full lg:h-[314px] h-[708px] bottom-0 mt-10 p-12 bg-other border-1'>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-1'>
                <div className='flex flex-col'>
                    <div className='flex justify-start'>
                        <Image src='/images/Glintpm.png' alt='GlintPM' width={130} height={120} />

                    </div>
                    <div className='flex justify-start gap-[14px] mt-12'>
                        {socials.map((social, index) => (
                            <div key={index} className='flex'>
                                <a href={social.url} target='_blank' rel='noreferrer'>
                                    <Image src={social.img} alt={social.name} width={30} height={30} />
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-inter sm:text-[20px] text-[15px] text-white'>CONTACT US</h1>
                    <div className='flex mt-12'>
                        <Image src='/images/phone.png' alt='phone' width={20} height={20} />
                        <p className='text-white text-sm sm:ml-4 ml-2'>+234 809 000 0000</p>

                    </div>
                    <div className='flex mt-12'>
                        <Image src='/images/mail.png' alt='phone' width={20} height={20} />
                        <a className='text-white text-sm sm:ml-4 ml-2' href="mailto:ayobami@logizon.com">company@xyzm.com</a>

                    </div>

                </div>
                <div className='flex flex-col sm:mt-0 mt-4'>
                    <h1 className='font-inter  sm:text-[20px] text-[15px] text-white'>OUR SERVICES</h1>
                    <div className='mt-12'>
                        <p className='text-white'>About Us</p>
                        <p className='text-white mt-4'>Blog</p>
                        <p className='text-white mt-4'>Contact Us</p>
                        <p className='text-white mt-4'>Careers</p>
                    </div>
                </div>
                <div className='flex flex-col sm:mt-0 mt-4'>
                    <h1 className='font-inter  sm:text-[20px] text-[15px] text-white'>SUPPORT</h1>
                    <div className='mt-12'>
                        <p className='text-white'>About Us</p>
                        <p className='text-white mt-4'>Blog</p>
                        <p className='text-white mt-4'>Contact Us</p>
                        <p className='text-white mt-4'>Careers</p>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-white text-center font-inter text-[50px]'>
                        Let’s work <br />together

                    </h1>
                </div>

            </div>

        </footer>
    )
}

export default Footer