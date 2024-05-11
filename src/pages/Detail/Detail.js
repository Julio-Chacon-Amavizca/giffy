import GifsContextProvider from 'context/GifsContext'
import Gif from 'components/Gif/Gif'
import useGlobalGifs from 'hooks/useGlobalGifs'

export default function Detail ({ params }) {
  const gifs = useGlobalGifs(GifsContextProvider)

  const thegif = gifs.find(singleGif => singleGif.id === params.id)
  console.log(thegif)

  return (
    <>
      <h3 className='App-title'>{thegif.title}</h3>
      <Gif {...thegif} />
    </>
  )
}
