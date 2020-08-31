import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import MovieCard from './MovieCard'
import api from './Api'

const ButtonsBox = styled.div``

const MainButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 90%;
  border: none;
  cursor: pointer;
  margin: 20px 40px;
  outline: none;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 10px 7px 65px -13px rgba(0, 0, 0, 0.75);
`

interface items {
  movies: Array<object>
}

function MoviesCards(props: items) {
  const { movies } = props
  const [count, setCount] = useState(0)
  const [currentItem, setCurrentItem] = useState(null)

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
  const handler = useSwipeable({
    onSwipedLeft: () => {
      console.log('swiprd')
      onRejectHandler(currentItem.id)
    },
    onSwipedRight: () => {
      onRejectHandler(currentItem.id)
    }
  })
  if (currentItem === null) {
    return <div>waiter</div>
  } else if (count === movies.length) {
    return <div>there is no more items</div>
  } else {
    return (
      <>
        <div {...handler}>
          <MovieCard item={currentItem}></MovieCard>
        </div>
        <ButtonsBox>
          <MainButton onClick={() => onRejectHandler(currentItem.id)}>
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              focusable="false"
              aria-hidden="true"
              role="presentation"
            >
              <path
                d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"
                fill="purple"
              ></path>
            </svg>
          </MainButton>
          <MainButton onClick={() => onAcceptHandler(currentItem.id)}>
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              focusable="false"
              aria-hidden="true"
              role="presentation"
            >
              <path
                d="M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09"
                fill="green"
              ></path>
            </svg>
          </MainButton>
        </ButtonsBox>
      </>
    )
  }
}

export default MoviesCards
