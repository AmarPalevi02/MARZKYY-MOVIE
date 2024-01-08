import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const InputSearch = () => {
    const ref = useRef()
    const route = useRouter()

    const handleSearch = (e) => {
        const keyword = ref.current.value

        if (!keyword) return

        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault()
            route.push(`/${keyword}`)
        }
    }

    return (
        <div className='relative min-w-[250px] h-10 '>
            <input
                type='text'
                className='bg-zinc-900 text-sm w-full h-full pl-2 rounded-xl'
                placeholder='apa yang ingn kamu tonton?'
                ref={ref}
                onKeyDown={handleSearch}
            />
            <button
                className="absolute flex justify-end top-3 items-center pr-3 right-0"
                onClick={handleSearch}
            >
                <FaSearch className='' />
            </button>
        </div>
    )
}

export default InputSearch