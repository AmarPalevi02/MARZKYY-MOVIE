import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlinePlayCircle } from "react-icons/ai";
import Seceleton from '../Seceleton';

const Card = ({ api, isLoading }) => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-3 gap-2 xs:gap-3 xs:px-2 '>
            {isLoading ?
                [0, 1, 2, 3, 4, 5, 6, 7].map((i) => <Seceleton key={i} />)
                :
                <>
                    {api.map((item) => {
                        return (
                            <Link href={`/detailAnime/${item.mal_id}`} key={item.mal_id} className='border border-slate-400 rounded-t-md h-[268px]'>
                                <div className='relative' >
                                    <div className="overflow-hidden hover:rounded-t-md">
                                        <div className="w-full h-[200px] flex relative hover:scale-125 hover:opacity-25  hover:ease-out duration-300 hover:rounded-t-md">
                                            <Image
                                                src={item.images.webp.image_url} alt='notfound' width={250} height={200}
                                                className='object-cover flex rounded-t-md'
                                            />
                                            <div className="  opacity-0 hover:opacity-100 absolute top-0 w-full h-[200px] flex justify-center items-center  ">
                                                <AiOutlinePlayCircle
                                                    className='text-[60px] text-white'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[50px] overflow-hidden pb-4">
                                        <h1 className='text-white mt-2 line-clamp-2 px-2 pb-4'>{item.title}</h1>
                                    </div>
                                </div>
                            </Link >
                        )
                    })}
                </>
            }
        </div>
    )
}

export default Card