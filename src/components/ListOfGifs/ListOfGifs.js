import './ListOfGifs.css'
import Gif from '../Gif/Gif'

export default function ListOfGifs ({ gifs }) {
  return (
    <div className='ListOfGifs'>
      {
        gifs.map(({ id, title, url, ...restOfGif }) => (
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
            extraInfo={restOfGif}
          />
        ))
      }
    </div>
  )
}
