import { API_KEY, API_URL } from './settings'

const fromApiResponseToGif = apiResponse => {
  const { data } = apiResponse
  const { images, id, title } = data
  const { url } = images.fixed_height_downsampled
  return { title, id, url }
}

export default function getSingleGif ({ id }) {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGif)
}
