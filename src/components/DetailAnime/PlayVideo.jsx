import React from 'react'
import YouTube from 'react-youtube'

const PlayVideo = ({youtubeId}) => {
    const opts = {
        height: '390',
        width: '640',
    }
    return (
        <YouTube
            videoId={youtubeId}
            opts={opts}
            onReady={(event) => event.target.pauseVideo()}
        />
    )
}

export default PlayVideo