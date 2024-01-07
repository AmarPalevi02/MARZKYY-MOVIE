import Navbar from "@/components/Navbar/Navbar"
import Card from "../components/Card"
import Description from "../components/Description"

export default async function Home() {
  const getData = await fetch(`${process.env.NEXT_PUBLIC__API_BASE_URL}/top/anime?limit=8`)
    .then(response => response.json())
  const Topanime = getData.data

  return (
    <>
      <Navbar />
      <section className="md:pt-20 sm:pt-20 xs:pt-0">
        <Description>#Popular</Description>
        <Card api={Topanime} />
      </section>
      <section>
        <Description>#Popular</Description>
        <Card api={Topanime} />
      </section>
    </>
  )
}
