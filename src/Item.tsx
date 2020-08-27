import React from 'react'
import styled from 'styled-components'

const ItemBox = styled.div`
  background-color: aquamarine;
  max-width: 500px;
  margin: auto;
  padding: 30px;
`
const ImageBox = styled.img`
  width: 100%;
`
const MovieTitle = styled.h1`
  text-align: left;
`
const Summary = styled.p`
  text-align: left;
`
const Button = styled.button`
  width: 50%;
  background-color: ${(props) => props.bgcolor};
`
/* 
function Item({ id, imageURL, title, summary, rating, onAccept, onReject }) {
  console.log(imageURL)
  return (
    <ItemBox>
    <ImageBox src={imageURL} />
    <MovieTitle>{title}</MovieTitle>
    <Summary>{summary}</Summary>
    <h2>{rating}/10</h2>
    <Button onClick={() => onReject(id)} bgcolor="red">
    Reject
    </Button>
    <Button onClick={() => onAccept(id)} bgcolor="green">
    Accept
    </Button>
    </ItemBox>
    )
  }
  */

interface items {
  id: string
  imageURL: string
  title: string
  summary: string
  rating: number
  onReject: any
  onAccept: any
}

export const Item = ({ id, imageURL, title, summary, rating, onAccept, onReject }: items) => {
  return (
    <ItemBox>
      <ImageBox src={imageURL} />
      <MovieTitle>{title}</MovieTitle>
      <Summary>{summary}</Summary>
      <h2>{rating}/10</h2>
      <Button onClick={() => onReject(id)} bgcolor="red">
        Reject
      </Button>
      <Button onClick={() => onAccept(id)} bgcolor="green">
        Accept
      </Button>
    </ItemBox>
  )
}

export default Item
