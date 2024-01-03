import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ title, images, id }) => {
    return (
        <Link href={`/${id}`} >
            <div className='relative'>
                <div className="w-full h-[200px] flex">
                    <Image src={images} alt='notfound' width={250} height={200} className='object-cover' />
                </div>
                <h1 className='text-white mt-2 line-clamp-2 pl-2 pb-3'>{title}</h1>
            </div>
        </Link >
    )
}

export default Card