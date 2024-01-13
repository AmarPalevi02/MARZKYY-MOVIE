import Image from 'next/image'
import React from 'react'
import { AiOutlineLike } from "react-icons/ai";

const Header = ({ title, image, score }) => {
    const formatNumber = Intl.NumberFormat().format(score)
    return (
        <div className="flex gap-2 items-center mt-2 justify-between ">
            <div className="flex gap-2 items-center">
                <div className="w-12 h-12 flex rounded-full bg-zinc-700">
                    <Image src={image} alt='----' width={100} height={100} className='object-cover p-1 rounded-full' />
                </div>
                <h1 className='text-white'>{title}</h1>
            </div>

            <div className="flex items-center relative pr-2">
                <button className='flex items-center bg-zinc-700 rounded-tl-2xl rounded-bl-2xl'>
                    <div className="flex items-center px-3 py-1 gap-2 ">
                        <AiOutlineLike className='text-white text-[20px] font-bold' />
                        <h3 className='text-white text-[17px]'>{formatNumber}</h3>
                    </div>
                </button>
                <div className="text-white text-[17px] bg-zinc-700 py-1">|</div>
                <button className='flex items-center bg-zinc-700 rounded-tr-2xl rounded-br-2xl'>
                    <div className="flex items-center px-3 py-[7px]">
                        <AiOutlineLike className='text-white text-[19px] font-bold rotate-180' />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Header