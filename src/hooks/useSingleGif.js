import useGifs from 'hooks/useGifs'
import { useEffect, useState } from 'react'
import getSingleGif from 'services/getSingleGif'

export function useSingleGif ({ id }) {
  const { gifs } = useGifs()

  const gifFromContext = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFromContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(function () {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({ id })
        .then(gif => {
          setGif(gif)
          setIsLoading(false)
          setIsError(false)
        }).catch(() => {
          setIsError(true)
          setIsLoading(false)
        })
    }
  }, [gif, id])

  return { gif, isLoading, isError }
}
