"use client"
import Navbar from "@/components/Navbar/Navbar"
import Card from "../components/Card"
import Description from "../components/Description"
import { useEffect, useState } from "react"

export default function Home() {
  const [topAnime, setTopAnime] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getTop = async () => {
    setIsLoading(true)
    const getData = await fetch(`${process.env.NEXT_PUBLIC__API_BASE_URL}/top/anime?limit=8`)
      .then(response => response.json())

      setTopAnime(getData.data)
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
          <Card api={topAnime} isLoading={isLoading}/> 
      </section>
      {/* <section>
        <Description>#Popular</Description>
        <Card api={Topanime} />
      </section> */}
    </>
  )
}
