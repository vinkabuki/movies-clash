import React, { useState } from 'react'
import styled from 'styled-components'

const MovieCardBox = styled.div`
  position: relative;
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

const InfoBox = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 20px;
  display: ${(props) => {
    if (!props.isVisible) {
      return 'none'
    }
  }};
`
const ExpandBox = styled.div`
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
const MovieTitle = styled.h1`
  text-align: left;
  color: ${(props) => (props.expanded ? 'white' : 'black')};
`
const MovieSummary = styled.p`
  text-align: left;
  color: ${(props) => (props.expanded ? 'white' : 'black')};
`
const MovieRating = styled.p`
  text-align: left;
  color: ${(props) => (props.expanded ? 'white' : 'black')};
`
const TextSpan = styled.span`
  background-color: rgba(0, 0, 0, 0.3);
`
const SecondaryButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-radius: 90px;
  cursor: pointer;
  border: none;
  font-size: 14px;
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
  const [expanded, setExpanded] = useState(true)

  const Expand = () => {
    if (expanded) {
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }

  return (
    <>
      <MovieCardBox imgSrc={item.imageURL}>
        <InfoBox isVisible={expanded}>
          <MovieTitle expanded={expanded}>
            <TextSpan>{item.title}</TextSpan>
          </MovieTitle>
          <MovieRating expanded={expanded}>
            <TextSpan>{item.rating}/10</TextSpan>
          </MovieRating>
          <MovieSummary expanded={expanded}>
            <TextSpan>{item.summary}</TextSpan>
          </MovieSummary>
        </InfoBox>
        <SecondaryButton
          onClick={() => {
            Expand()
          }}
        >
          i
        </SecondaryButton>
        <ExpandBox isVisible={expanded}>
          <MovieTitle expanded={expanded}>{item.title}</MovieTitle>
          <MovieRating expanded={expanded}>{item.rating}/10</MovieRating>
          <MovieSummary expanded={expanded}>{item.summary}</MovieSummary>
        </ExpandBox>
      </MovieCardBox>
    </>
  )
}

export default MovieCard
