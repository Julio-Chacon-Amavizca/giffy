/* eslint-disable react/jsx-indent */
import { useCallback, useEffect, useRef } from 'react'
import Spinners from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()

  const { isNearScreen } = useNearScreen(
    {
      externalRef:
        loading
          ? null
          : externalRef,
      once: false
    })

  // const handleNextPage = () => setPage(prevPage => prevPage + 1)
  // console.log(isNearScreen)
  // const debounceHandleNextPage = useRef()
  // const handleNextPage = () => console.log('Next page')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(() => {
    console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <>
      {
        loading
          ? <Spinners />
          : <>
            <h3 className='App-title'>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef} />
            </>
      }
      <br />
    </>
  )
}
