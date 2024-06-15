import Spinners from 'components/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import React, { Suspense } from 'react'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinners />}>|
        {
          isNearScreen
            ? <TrendingSearches />
            : null
        }
      </Suspense>
    </div>
  )
}
