import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import MovieCard from './MovieCard'
import api from './Api'

interface items {
  movies: Array<object>
}

function MoviesCards(props: items) {
  const { movies } = props
  const [count, setCount] = useState(0)
  const [currentItem, setCurrentItem] = useState(null)

  const handler = useSwipeable({
    onSwiped: () => {
      console.log('swiped')
    }
  })

  useEffect(() => {
    setCurrentItem(movies[count])
  }, [movies, count])

  const onAcceptHandler = (id: string) => {
    api.acceptMovie(id)
    setCount(count + 1)
  }
  const onRejectHandler = (id: string) => {
    api.rejectMovie(id)
    setCount(count + 1)
  }
  if (currentItem === null) {
    return <div>waiter</div>
  } else if (count === movies.length) {
    return <div>there is no more items</div>
  } else {
    return (
      <MovieCard
        {...handler}
        item={currentItem}
        onAcceptHandler={onAcceptHandler}
        onRejectHandler={onRejectHandler}
      ></MovieCard>
    )
  }
}

export default MoviesCards
