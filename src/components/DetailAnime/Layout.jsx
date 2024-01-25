import React from 'react'
import PlayVideo from './PlayVideo'
import Header from './Header'
import Description from './Description'
import Rekomended from './Rekomended'

const Layout = ({ youtubeId, title, image, score, des }) => {
    return (
        <div className="flex gap-3 pt-4">
            <div className='w-[63%] h-[100vh] relative'>
                <PlayVideo youtubeId={youtubeId} />
                <Header title={title} image={image} score={score} />
                <Description des={des} />
            </div>
            <Rekomended />
        </div>
    )
}

export default Layout