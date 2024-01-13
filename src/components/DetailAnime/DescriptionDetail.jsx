import Image from 'next/image'
import React from 'react'
import { AiOutlineLike } from "react-icons/ai";

const DescriptionDetail = ({ title, image, score }) => {
    const formatNumber = Intl.NumberFormat().format(score)

    return (
        <div className='mt-2'>
            <div className="flex gap-2 items-center ">
                <div className="w-12 h-12 flex rounded-full bg-zinc-700">
                    <Image src={image} alt='----' width={100} height={100} className='object-cover p-1 rounded-full' />
                </div>
                <h1 className='text-white'>{title}</h1>

                <div className="flex items-center">
                    <button className='flex items-center bg-zinc-700'>
                        <AiOutlineLike className='text-white text-[20px] font-bold' />
                        <h3 className='text-white'>{formatNumber}</h3>
                    </button>
                    <button className='flex items-center bg-zinc-700'>
                        <AiOutlineLike className='text-white text-[20px] font-bold rotate-180 ' />
                        <h3 className='text-white'></h3>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DescriptionDetail