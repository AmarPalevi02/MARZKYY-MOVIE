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