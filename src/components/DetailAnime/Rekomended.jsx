"use client"
import React, { useEffect, useState } from 'react'
import { getRekomendedAnime, reproduce } from '@/utils/fetch'
import Image from 'next/image'
import Link from 'next/link'

const Rekomended = () => {
    const [rekomended, setRekomended] = useState([])

    const getRekomended = async () => {
        let response = await getRekomendedAnime("recommendations/anime", "entry")
        setRekomended(response = reproduce(response, 10))
    }

    useEffect(() => {
        getRekomended()
    }, [])
    return (
        <div className='w-[330px] h-[120px] relative '>
            {rekomended.map((item) => {
                return (
                    <Link
                        href={`/detailAnime/${item.mal_id}`}
                        key={item.mal_id}
                        className='w-[330px] h-[120px] flex mb-2 gap-1 bg-gray-700 hover:bg-gray-800 transition-all'
                    >
                        <div className="">
                            <div className="w-[150px] h-full flex mb-2 relative">
                                <Image
                                    src={item.images.webp.image_url}
                                    alt='notfound'
                                    width={250}
                                    height={200}
                                    className='object-cover'
                                />
                            </div>
                        </div>
                        <div className="h-[30px] overflow-hidden pb-4">
                            <h1 className='text-white mt-2 line-clamp-2 px-2 pb-4'>{item.title}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Rekomended