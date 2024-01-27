"use client"
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { GrNotification } from "react-icons/gr";
import { usePathname } from 'next/navigation'
import InputSearch from './InputSearch';
import UserLogin from './UserLogin';

const Navbar = () => {
    const pathname = usePathname()

    const isHome = pathname === '/'
    return (
        <nav className='md:flex sm:flex justify-between transition-all duration-300 items-center py-5 top-0 z-10 fixed bg-black xs:hidden'>
            <div className="text-white flex gap-2 items-center">
                {isHome ?
                    <>
                        <button className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center">
                            <IoIosArrowBack className='text-xl font-bold' />
                        </button>
                        <button className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center">
                            <IoIosArrowBack className='rotate-180 text-xl font-bold' />
                        </button>
                    </>
                    :
                    <>
                        <button className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center">
                            <IoIosArrowBack className='text-xl font-bold' />
                        </button>
                        <button className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center">
                            <IoIosArrowBack className='rotate-180 text-xl font-bold' />
                        </button>
                        <InputSearch />
                    </>
                }
            </div>
            <ul className='text-white flex pr-2 gap-2'>
                <button
                    className='bg-white text-black px-4 rounded-xl py-0.1 hover:opacity-75 hover:ease-in-out font-bold'
                >
                    Jelajah Premium
                </button>
                <button
                    className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center"
                >
                    <GrNotification />
                </button>
                <UserLogin />
            </ul>
        </nav>
    )
}

export default Navbar