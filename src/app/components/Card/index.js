import Image from 'next/image'
import React from 'react'

const Card = ({ title, images }) => {
    return (
        <div>
            <h1>{title}</h1>
            <Image src={images} alt='...' width={600} height={600}/>
        </div>
    )
}

export default Card