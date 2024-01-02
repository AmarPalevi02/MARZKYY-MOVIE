import React from 'react'
import Link from 'next/link'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import { GrSatellite } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { BiBullseye } from "react-icons/bi";

const SideNavbar = () => {
    return (
        <div className='px-5 py-5 bg-bcground w-[240px] h-[100vh] min-h-[100vh] overflow-y-hidden top-0 sticky '>
            <ul className='flex justify-between '>
                <nav className='text-gray text-lg cursor-pointer flex gap-5 flex-col '>
                    <Link href={'/'}>
                        <li className='flex items-center gap-3 font-semibold '>
                            <GoHome className='text-[25px]' />
                            <p className='text-[17px]'>
                                Home
                            </p>
                        </li>
                    </Link>
                    <Link href={'/search'}>
                        <li className='flex items-center gap-3 font-semibold'>
                            <CiSearch className='text-[25px]' />
                            <p className='text-[17px]'>
                                Search
                            </p>
                        </li>
                    </Link>
                    <Link href={'/wwe'}>
                        <li className='flex items-center gap-3 font-semibold'>
                            <BiLibrary className='text-[25px]' />
                            <p className='text-[17px]'>
                                Your Library
                            </p>
                        </li>
                    </Link>
                    <Link href={'/ewew'}>
                        <li className='flex items-center gap-3 font-semibold'>
                            <GrSatellite className='text-[25px]' />
                            <p className='text-[17px]'>
                                Stream
                            </p>
                        </li>
                    </Link>
                </nav>
            </ul>

            <nav className='text-gray mt-[36px] '>
                <ul className='border-b-2 border-[#242424]'>
                    <Link href={'/ewew'}>
                        <li className='flex items-center gap-3 font-semibold mb-5'>
                            <div className="bg-gray1 rounded-sm w-[25px] h-[25px] flex items-center text-center">
                                <FaPlus className='text-bacground text-[16px] font-bold text-center w-full' />
                            </div>
                            <p className='text-17'>
                                Create Playlist
                            </p>
                        </li>
                    </Link>
                    <Link href={'/ff'}>
                        <li className='flex items-center gap-3 font-semibold mb-5'>
                            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-sm w-[25px] h-[25px] flex items-center text-center">
                                <FaHeart className='text-gray text-[16px] font-bold text-center w-full' />
                            </div>
                            <p className='text-17'>
                                Like Songs
                            </p>
                        </li>
                    </Link>
                    <Link href={'/fdf'}>
                        <li className='flex items-center gap-3 font-semibold mb-8'>
                            <div className="bg-[#003E31] rounded-sm w-[25px] h-[25px] flex items-center text-center">
                                <BiBullseye className='text-[#14923B] text-[16px] font-bold text-center w-full' />
                            </div>
                            <p className='text-17'>
                                Your Episodes
                            </p>
                        </li>
                    </Link>
                </ul>
            </nav>
            <h3 className='text-gray mt-8 font-semibold'>Playlist Name</h3>
        </div>
    )
}

export default SideNavbar