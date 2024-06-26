import { Link } from 'wouter'
import './Gif.css'
import React from 'react'
function Gif ({ title, id, url }) {
  return (
    <div className='Gif'>
      <Link
        to={`/gif/${id}`}
        className='Gif-link'
      >
        <h4>{title}</h4>
        <img loading='lazy' src={url} alt={title} />
      </Link>
    </div>
  )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
