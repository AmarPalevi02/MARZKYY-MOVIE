import Card from "./components/Card"

export default async function Home() {
  const getData = await fetch(`${process.env.NEXT_PUBLIC__API_BASE_URL}/top/anime`)
    .then(response => response.json())
  const anime = getData.data

  return (
    <div>
      {anime.map((item, i) => {
        return (
          <div key={i}>
            <Card title={item.title} images={item.images.webp.image_url} />
          </div>
        )
      })}
    </div>
  )
}
