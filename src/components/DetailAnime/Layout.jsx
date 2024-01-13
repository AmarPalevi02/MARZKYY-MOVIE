import React from 'react'
import PlayVideo from './PlayVideo'
import Header from './Header'
import Description from './Description'

const Layout = ({ youtubeId, title, image, score, des }) => {
    return (
        <div className="">
            <div className='w-[63%] h-[100vh] relative'>
                <PlayVideo youtubeId={youtubeId} />
                <Header title={title} image={image} score={score} />
                <Description des={des} />
            </div>
        </div>
    )
}

export default Layout