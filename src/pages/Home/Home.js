import './Home.css'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import LazyTrending from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'
import { useCallback } from 'react'

export default function Home () {
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation()

  // eslint-disable-next-line no-unused-vars
  const { loading, gifs } = useGifs()

  const handleSubmit = useCallback(({ keyword }) => {
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <div className='App-main'>
        <div className='App-results'>
          <h3 className='App-title'>Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className='App-category'>
          <LazyTrending />
        </div>
      </div>
    </>
  )
}
