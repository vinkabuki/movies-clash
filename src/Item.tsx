import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ItemBox = styled.div`
  background-color: blue;
  max-width: 500px;
  margin: auto;
  padding: 30px;
`
const CoverImage = styled.img`
  width: 100%;
`
const MovieTitle = styled.h1`
  text-align: left;
`
const Summary = styled.p`
  text-align: left;
`
const MainButton = styled.button`
  width: 50%;
  background-color: ${(props) => props.bgcolor};
`

interface items {
  movies: Array<object>
}

export const Item = (props: items) => {
  const { movies } = props
  const [count, setCount] = useState(0)
  const [currentItem, setCurrentItem] = useState(null)

  useEffect(() => {
    setCurrentItem(movies[count])
  })

  const onAccept = (id: string) => {
    axios.put(`http://localhost:8000/recommendations/${id}/accept/`)
    setCount(count + 1)
  }
  const onReject = (id: string) => {
    axios.put(`http://localhost:8000/recommendations/${id}/reject/`)
    setCount(count + 1)
  }

  if (currentItem === null) {
    return <div>waiter</div>
  } else if (count === movies.length) {
    return <div>there is no more items</div>
  } else {
    return (
      <ItemBox>
        <CoverImage src={currentItem.imageURL} alt="there is no cover image for this movie, sorry" />
        <MovieTitle>{currentItem.title}</MovieTitle>
        <Summary>{currentItem.summary}</Summary>
        <h2>{currentItem.rating}/10</h2>
        <MainButton onClick={() => onReject(currentItem.id)} bgcolor="red">
          Reject
        </MainButton>
        <MainButton onClick={() => onAccept(currentItem.id)} bgcolor="green">
          Accept
        </MainButton>
      </ItemBox>
    )
  }
}

export default Item
