import React from 'react'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'
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

interface IProps {
  item: {
    id: string
    imageURL: string
    title: string
    summary: string
    rating: string
  }
  onAcceptHandler: any
  onRejectHandler: any
  //handler: any
}

export const MovieCard = ({ item, onAcceptHandler, onRejectHandler }: IProps) => {
  const handler = useSwipeable({
    onSwiped: (id) => {
      onRejectHandler(id)
    }
  })

  return (
    <ItemBox {...handler}>
      <CoverImage src={item.imageURL} alt="there is no cover image for this movie, sorry" />
      <MovieTitle>{item.title}</MovieTitle>
      <Summary>{item.summary}</Summary>
      <h2>{item.rating}/10</h2>
      <MainButton onClick={() => onRejectHandler(item.id)} bgcolor="red">
        Reject
      </MainButton>
      <MainButton onClick={() => onAcceptHandler(item.id)} bgcolor="green">
        Accept
      </MainButton>
    </ItemBox>
  )
}

export default MovieCard
