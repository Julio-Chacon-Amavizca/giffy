import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, id, title } = image
      const { url } = images.fixed_height_downsampled
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({ limit = 5, keyword = 'Morty', page = 0 } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=es&bundle=messaging_non_clips`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
