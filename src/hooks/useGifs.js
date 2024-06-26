import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContextProvider from '../context/GifsContext'

const INITIAL_PAGE = 0

export default function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const { gifs, setGifs } = useContext(GifsContextProvider)
  const [page, setPage] = useState(INITIAL_PAGE)
  // Recuperamos la keyword del localStorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)

    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [page, keywordToUse, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}
