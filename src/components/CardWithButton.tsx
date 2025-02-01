import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

interface Props {
    imgSrc: string
    title: string
    content: string
    date?: string
    btnText: string
    id: number
}

const CardWithButton = ({ imgSrc, title, content, date, btnText, id}: Props) => {
    return (
        <div className='h-80 w-[100%] flex flex-col border rounded-md bg-[#F5F7FA] p-4'>
            <div className="h-[50%] relative flex justify-center">
              <Image className="rounded-lg " src={imgSrc} alt="it" fill />
            </div>
            <div className="h-[40%] relative">
              <div className="w-full flex justify-between m-2">
                <h1 className="text-left font-semibold text-[20px]">
                  {title}
                </h1>
                <p className="m-1">{date ? date : ""}</p>
              </div>
              <p className="">{content}</p>
            </div>
            <div className="h-[10%] relative flex justify-center">
              <Link href={`/blogs/${id}`}>
                
              <Button
                text={btnText}
                textColor="#FF0000"
                noBg
                height={30}
                weight={150}
                icon
              />
              </Link>
            </div>
        </div>
    )
}

export default CardWithButton