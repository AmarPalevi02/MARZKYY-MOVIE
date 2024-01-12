"use client"
import DescriptionDetail from '@/components/DetailAnime/DescriptionDetail'
import PlayVideo from '@/components/DetailAnime/PlayVideo'
import { getTopAnime } from '@/utils/fetch'
import Image from 'next/image'
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
      <div className="">
        <PlayVideo youtubeId={youtubeId} />
        <DescriptionDetail title={detailAnime.title} image={img} />
      </div>
    </div>
  )
}

export default DetailAnime