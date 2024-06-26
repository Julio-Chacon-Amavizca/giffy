import { useState, useEffect, useRef } from 'react'

export default function useNearScreen ({ distance = '100px', externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()
  useEffect(function () {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current
    if (!element) return
    const onChange = (entries, observer) => {
      const el = entries[0]
      console.log(el.isIntersecting)
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })
      observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
