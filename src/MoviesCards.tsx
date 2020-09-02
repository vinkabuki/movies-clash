import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'

import MovieCard, { ItemType } from './MovieCard'
import api from './Api'

import { ReactComponent as AcceptButton } from './assets/accept.svg'
import { ReactComponent as RejectButton } from './assets/reject.svg'

const ButtonsBox = styled.div`
  width: 100%;
  box-sigin: border-box;
`
const MainButton = styled.button`
  width: 100px;
  height: 100px;
  max-width: 50%;
  border-radius: 90%;
  border: none;
  cursor: pointer;
  margin: 20px 40px;
  outline: none;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 10px 7px 65px -13px rgba(0, 0, 0, 0.75);
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
  }
  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
  }
`
interface IProps {
  movies: Array<ItemType>
}

const MoviesCards: React.FC<IProps> = ({ movies }: IProps) => {
  const [count, setCount] = useState<number>(0)
  const [currentItem, setCurrentItem] = useState<null | ItemType>(null)

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
  const onSwipeHandler = useSwipeable({
    onSwipedLeft: () => {
      onRejectHandler(currentItem.id)
    }
  })
  if (currentItem === null) {
    return <div>rendering</div>
  } else if (count === movies.length) {
    return <div>there is no more items, refresh, and start over!</div>
  } else {
    return (
      <>
        <div {...onSwipeHandler}>
          <MovieCard item={currentItem}></MovieCard>
        </div>
        <ButtonsBox>
          <MainButton onClick={() => onRejectHandler(currentItem.id)}>
            <RejectButton />
          </MainButton>
          <MainButton onClick={() => onAcceptHandler(currentItem.id)}>
            <AcceptButton />
          </MainButton>
        </ButtonsBox>
      </>
    )
  }
}

export default MoviesCards
