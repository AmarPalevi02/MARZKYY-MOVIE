"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import SearchCard from '@/components/Card/SearchCard'
import Description from '@/components/Description'

const SerachAnime = ({ params }) => {
  const { search } = params
  const [isSearch, setSearch] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    setIsLoading(true)
    const result = await fetch(`${process.env.NEXT_PUBLIC__API_BASE_URL}/anime?q=${search}`)
      .then(response => response.json())

    setSearch(result.data)
    setIsLoading(false)
  }

  useEffect(() => {
    handleSearch()
  }, [])

  return (
    <>
      <Navbar />
      <section className='md:pt-20 sm:pt-20 xs:pt-0'>
        {search === 'search' ?
          ""
          :
          <Description>Hasil pencarian {search}</Description>
        }
        <SearchCard search={isSearch} isLoading={isLoading} />
      </section>
    </>
  )
}

export default SerachAnime