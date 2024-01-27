"use client"
import Navbar from "@/components/Navbar/Navbar"
import Card from "../components/Card"
import Description from "../components/Description"
import { useEffect, useState } from "react"
import { getTopAnime, getRekomendedAnime, reproduce } from "@/utils/fetch"
import { authSeason } from "@/utils/auth"
import {authOption} from "@/app/api/auth/[...nextauth]/route"

export default function Home() {
  const [topAnime, setTopAnime] = useState([])
  const [rekomended, setRekomended] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [authUser, setAuthUser] = useState(null)

  const getTop = async () => {
    setIsLoading(true)
    const getData = await getTopAnime("top/anime", "limit=8")
    let rekomendedAnime = await getRekomendedAnime("recommendations/anime", "entry")
    let authuser = await authSeason(authOption)
    setTopAnime(getData.data)
    setRekomended(rekomendedAnime = reproduce(rekomendedAnime, 8))
    setAuthUser(authuser)
    console.log(authuser)
    setIsLoading(false)
  }

  useEffect(() => {
    getTop()
  }, [authUser])

  return (
    <>
      <Navbar auth={authUser} />
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
