"use client"

import Layout from '@/components/DetailAnime/Layout'
import { getTopAnime } from '@/utils/fetch'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DetailAnime = () => {
  const { id } = useParams()
  const [detailAnime, setDetailAnime] = useState([])
  const [youtubeId, setYoutubeId] = useState(null)
  const [img, setImg] = useState([])

  const getDetailAnime = async () => {
    const result = await getTopAnime(`anime/${id}`)

    setDetailAnime(result.data)
    setYoutubeId(result?.data?.trailer?.youtube_id)
    setImg(result?.data?.images.webp.image_url)
  }

  useEffect(() => {
    getDetailAnime()
  }, [])

  console.log(detailAnime)
  return (
    <div className=''>
      <Layout youtubeId={youtubeId} title={detailAnime.title} image={img} score={detailAnime.scored_by} />
    </div>
  )
}

export default DetailAnime