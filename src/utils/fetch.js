export const getTopAnime = async (resorch, query) => {
    const result = await fetch(`${process.env.NEXT_PUBLIC__API_BASE_URL}/${resorch}?${query}`)
        .then(response => response.json())
    return result
}

export const getSearchAnime = async (resorch, query) => {
    const result = await fetch(`${process.env.NEXT_PUBLIC__API_BASE_URL}/${resorch}?q=${query}`)
        .then(response => response.json())
    return result
}

export const getRekomendedAnime = async (resorch, objectProperty) => {
    const response = await getTopAnime(resorch)
    return response.data.flatMap(item => item.entry)
}

export const reproduce = (data, gap) => {
    const frist = ~~(Math.random() * (data.length - gap) + 1)
    const last = frist + gap

    return data.slice(frist, last)
}