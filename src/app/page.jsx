"use client"
import Navbar from "@/components/Navbar/Navbar"
import Card from "../components/Card"
import Description from "../components/Description"
import { useEffect, useState } from "react"
import { getTopAnime, getRekomendedAnime, reproduce } from "@/utils/fetch"

export default function Home() {
  const [topAnime, setTopAnime] = useState([])
  const [rekomended, setRekomended] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getTop = async () => {
    setIsLoading(true)
    const getData = await getTopAnime("top/anime", "limit=8")
    let rekomendedAnime = await getRekomendedAnime("recommendations/anime", "entry")
    setTopAnime(getData.data)
    setRekomended(rekomendedAnime = reproduce(rekomendedAnime, 8))
    setIsLoading(false)
  }

  useEffect(() => {
    getTop()
  }, [])

  return (
    <>
      <Navbar />
      <section className="md:pt-20 sm:pt-20 xs:pt-0">
        <Description>#Popular</Description>
        <Card api={topAnime} isLoading={isLoading} />
      </section>
      <section className={`mt-10 pb-5 ${isLoading === true ? 'hidden' : 'block'}`}>
        <Description>#Rekomendasi</Description>
        <Card api={rekomended} />
      </section>
    </>
  )
}
