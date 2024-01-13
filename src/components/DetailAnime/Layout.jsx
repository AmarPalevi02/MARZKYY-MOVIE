import React from 'react'
import PlayVideo from './PlayVideo'
import DescriptionDetail from './DescriptionDetail'

const Layout = ({ youtubeId, title, image, score }) => {
    return (
        <div className='w-[63%] h-[100vh] relative'>
            <PlayVideo youtubeId={youtubeId} />
            <DescriptionDetail title={title} image={image} score={score} />
        </div>
    )
}

export default Layout