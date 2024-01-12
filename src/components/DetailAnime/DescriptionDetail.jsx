import Image from 'next/image'
import React from 'react'

const DescriptionDetail = ({ title, image }) => {
    return (
        <div>
            <h1 className='text-white'>{title}</h1>
            <div className="w-12 h-12 flex rounded-full">
                <Image src={image} alt='----' width={100} height={100} className='object-cover p-1 rounded-full' />
            </div>
        </div>
    )
}

export default DescriptionDetail