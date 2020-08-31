import React from 'react'
import MoviesCards from './MoviesCards'
import { MoviesDataContext } from './data-context'
import styled from 'styled-components'

const BodyBox = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
`

const Body: React.FC = () => {
  return (
    <BodyBox>
      <MoviesDataContext.Consumer>{(movies) => <MoviesCards movies={movies} />}</MoviesDataContext.Consumer>
    </BodyBox>
  )
}

export default Body
