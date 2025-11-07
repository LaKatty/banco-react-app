import React from 'react'

interface TextProps {
    text: string;
}

const Text: React.FC<TextProps> = ({text}) => {
    return (
        <div className=''>
            <p className='text-lg text-gray-900 font-extralight dark:text-black'>{text}</p>
        </div>
    )
}

export default Text