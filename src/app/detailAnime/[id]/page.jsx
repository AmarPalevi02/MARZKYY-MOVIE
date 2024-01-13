"use client"

import Layout from '@/components/DetailAnime/Layout'
import { getTopAnime } from '@/utils/fetch'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DetailAnime = () => {
  const { id } = useParams()
  const [detailAnime, setDetailAnime] = useState([])
  const [detailAnimeByEpisode, setDetailAnimeByEpisode] = useState([])
  const [youtubeId, setYoutubeId] = useState(null)
  const [img, setImg] = useState([])

  const getDetailAnime = async () => {
    const result = await getTopAnime(`anime/${id}`)
    const episode = await getTopAnime(`anime/${id}`, `/episodes`)
    
    setDetailAnime(result.data)
    setYoutubeId(result?.data?.trailer?.youtube_id)
    setImg(result?.data?.images.webp.image_url)

    setDetailAnimeByEpisode(result.data)
  }

  useEffect(() => {
    getDetailAnime()
  }, [])

  console.log(detailAnime)
  console.log('epiisode')
  console.log(detailAnimeByEpisode)
  return (
    <div className=''>
      <Layout youtubeId={youtubeId} title={detailAnime.title} image={img} score={detailAnime.scored_by} des={detailAnime.synopsis} />
    </div>
  )
}

export default DetailAnime