import React from 'react'

const Description = ({children}) => {
    return (
        <h1 className='text-white text-bold md:text-xl sm:text-md text-[18px] '>{children}</h1>
    )
}

export default Description