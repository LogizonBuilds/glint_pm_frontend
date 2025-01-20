import React from 'react'

type Props = {
    height?: number,
    weight?: number,
    text: string
}

const Button = ({ weight, height, text }: Props) => {
    return (
        <div
            style={{
                width: weight ? `${weight}px` : '158px',
                height: height ? `${height}px` : '42px'
            }}
            className={`bg-primary rounded-xl flex justify-center cursor-pointer items-center`}>
            <p className="text-gray-50 font-bold">{text}</p>
        </div>
    )
}

export default Button