import React from 'react'

const Seceleton = () => {
    return (
        <div className="bg-zinc-700 268px">
            <div className="relative">
                <div className=" w-full h-[200px] animate-pulse flex relative ">
                    <div className="w-full h-full bg-zinc-900"></div>
                </div>
            </div>
            <div className='text-white mt-2 line-clamp-2 pl-2 pb-11'>
                <div className="w-2/3 h-4 bg-zinc-900 animate-pulse"></div>
            </div>
        </div>
    )
}

export default Seceleton