"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Description from '@/components/Description'
import Card from '@/components/Card'
import { getSearchAnime } from '@/utils/fetch'

const SerachAnime = ({ params }) => {
  const { search } = params
  const decodedSearch = decodeURI(search)

  const [isSearch, setSearch] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async () => {
    setIsLoading(true)
    const getSeacrh = await getSearchAnime('anime', `${decodedSearch}`)

    setSearch(getSeacrh.data)
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
          <Description>Hasil pencarian {decodedSearch}</Description>
        }
        <Card api={isSearch} isLoading={isLoading} />
      </section>
    </>
  )
}

export default SerachAnime