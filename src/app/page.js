import Card from "./components/Card"
import Description from "./components/Description"

export default async function Home() {
  const getData = await fetch(`${process.env.NEXT_PUBLIC__API_BASE_URL}/top/anime?limit=8`)
    .then(response => response.json())
  const anime = getData.data

  return (
    <div>
      <Description>Popular</Description>
      <div className='grid md:grid-cols-4 sm:grid-cols-3 gap-2'>
        {anime.map((item) => {
          return (
            <div key={item.mal_id} className="">
              <Card title={item.title} images={item.images.webp.image_url} id={item.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
