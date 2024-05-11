import { useState } from 'react'
import './Home.css'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import LazyTrending from 'components/TrendingSearches'

export default function Home () {
  const [keyword, setKeyword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation()

  const { loading, gifs } = useGifs()

  const handleSubmit = event => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder='Search a gif here...' onChange={handleChange} type='text' value={keyword} />
      </form>
      <div className='App-main'>
        <div className='App-results'>
          <h3 className='App-title'>Última búsqueda</h3>
          <ListOfGifs gifs={gifs} loading={loading} />
        </div>
        <div className='App-category'>
          <LazyTrending />
        </div>
      </div>
    </>
  )
}
