import React, { useState } from 'react'

const Description = ({ des }) => {
    // console.log(des.length)
    const [showAll, setShowAll] = useState(false)

    const showAllDes = () => {
        setShowAll(!showAll)
    }
    return (
        <div className='mt-2'>
            <button
                onClick={showAllDes}
                className='text-white px-1 text-justify'
            >
                <h1 className={showAll ? `text-white px-2 ` : 'text-white px-2 line-clamp-3'} >{des}</h1>
                <h1 className='px-2'>{showAll ? 'Lebih sedikit' : 'lainnya'}</h1>
            </button>
        </div>
    )
}

export default Description