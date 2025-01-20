import React from 'react'

type Props = {
    height?: number,
    weight?: number,
    text: string
}

const Button = ({ weight, height, text }: Props) => {
    return (
        <button
            style={{
                width: weight ? `${weight}px` : '158px',
                height: height ? `${height}px` : '42px'
            }}
            onClick={() => console.log('Button clicked')} // will add functionality later
            className={`bg-primary rounded-md flex justify-center cursor-pointer items-center`}>
            <p className="text-gray-50 font-bold">{text}</p>
        </button>
    )
}

export default Button