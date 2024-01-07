"use client"
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { GrNotification } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {

    return (
        <nav className='md:flex sm:flex justify-between transition-all duration-300 items-center py-4 top-0 z-10 fixed bg-black xs:hidden'>
            <div className="text-white flex gap-2">
                <button className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center">
                    <IoIosArrowBack className='text-xl font-bold' />
                </button>
                <button className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center">
                    <IoIosArrowBack className='rotate-180 text-xl font-bold' />
                </button>
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
                <button
                    className="w-[30px] h-[30px] bg-[#272829] rounded-full flex justify-center items-center text-center"
                >
                    <FaRegUser />
                </button>
            </ul>
        </nav>
    )
}

export default Navbar