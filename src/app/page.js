import Navbar from "@/components/Navbar"
import Card from "../components/Card"
import Description from "../components/Description"

export default async function Home() {
  const getData = await fetch(`${process.env.NEXT_PUBLIC__API_BASE_URL}/top/anime?limit=8`)
    .then(response => response.json())
  const Topanime = getData.data

  return (
    <>
      <Navbar />
      <section>
        <Description>#Popular</Description>
        <Card api={Topanime} />
      </section>
    </>
  )
}
