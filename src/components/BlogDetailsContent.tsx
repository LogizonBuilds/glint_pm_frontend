import React from 'react'
import Image from 'next/image'

type Props = {
    data: BlogData
    blogs: BlogData[]
}

export interface BlogData {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    image: string

}
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-GB', options)
  }

const BlogDetailsContent = ({ data, blogs}: Props) => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
        <div className='flex flex-col col-span-2'>
            <div className='flex justify-between'>
                <h1 className='text-[25px] leading-4 font-inter-600 mb-8 font-bold'>{data.title}</h1>
                <h4 className='text-[20px] leading-3 font-inter-500'>{formatDate(data.date)}</h4>
            </div>
            <div className='text-left'>
                {data.content}
            </div>
        </div>
        <div className='bg-[#F5F7FA] text-[20px] p-6 font-inter-600 rounded-sm'>
            <h1 className='text-center font-bold'>
                Our recent Blog

            </h1>
            <div className='mt-3 flex flex-col'>
                {
                    blogs.map((blog: BlogData, index: number) => (
                        <div key={index} className='grid grid-cols-3 mb-4'>
                            <div className=''>
                                <Image className='rounded-md'  src={blog.image} alt='blog' height={74} width={114}/>
                            </div>
                            <div className='flex flex-col col-span-2'>
                            <h1 className='text-[20px] font-inter-500'>{blog.title}</h1>
                            <h1 className='text-[20px] font-inter-500'>{blog.date}</h1>
                            </div>
                        </div>
                    ))
                    
                }


            </div>

        </div>

    </div>
  )
}

export default BlogDetailsContent