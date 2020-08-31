import React, { useState } from 'react'
import styled from 'styled-components'

const ItemBox = styled.div`
  position: relative;
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  background-image: url(${(props) => props.imgSrc});
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 580px;
  @media (max-width: 400px) {
    min-height: calc(100vw * 1.45);
  }
  box-shadow: 10px 7px 65px -13px rgba(0, 0, 0, 0.75);
`

const Kontener = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 20px;
  display: ${(props) => {
    if (!props.isVisible) {
      return 'none'
    }
  }};
`

const MovieTitle = styled.h1`
  text-align: left;
  color: ${(props) => (props.themek ? 'white' : 'black')};
  display: block;
`
const Summary = styled.p`
  text-align: left;
  color: ${(props) => (props.themek ? 'white' : 'black')};
  display: block;
`

const Rating = styled.p`
  text-align: left;
  color: ${(props) => (props.themek ? 'white' : 'black')};
  display: block;
`
const Spanke = styled.span`
  background-color: rgba(0, 0, 0, 0.75);
`
const SecondaryButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 30px;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  border: none;
  font-size: 18px;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`
const Expander = styled.div`
  box-sizing: border-box;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  margin: auto;
  margin-top: 590px;
  @media (max-width: 400px) {
    margin-top: calc(100vw * 1.45);
  }

  display: ${(props) => {
    if (props.isVisible) {
      return 'none'
    }
  }};
`

interface IProps {
  item: {
    id: string
    imageURL: string
    title: string
    summary: string
    rating: string
  }
}

export const MovieCard = ({ item }: IProps) => {
  const [expand, setExpand] = useState(true)

  const Expand = () => {
    if (expand) {
      setExpand(false)
    } else {
      setExpand(true)
    }
  }

  return (
    <>
      <ItemBox imgSrc={item.imageURL}>
        <Kontener isVisible={expand}>
          <MovieTitle themek={expand}>
            <Spanke>{item.title}</Spanke>
          </MovieTitle>
          <Rating themek={expand}>
            <Spanke>{item.rating}/10</Spanke>
          </Rating>
          <Summary themek={expand}>
            <Spanke>{item.summary}</Spanke>
          </Summary>
        </Kontener>
        <SecondaryButton
          onClick={() => {
            Expand()
          }}
        >
          i
        </SecondaryButton>
        <Expander isVisible={expand}>
          <MovieTitle themek={expand}>{item.title}</MovieTitle>
          <Rating themek={expand}>{item.rating}/10</Rating>
          <Summary themek={expand}>{item.summary}</Summary>
        </Expander>
      </ItemBox>
    </>
  )
}

export default MovieCard
