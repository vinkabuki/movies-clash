import React from 'react'
import MoviesCards from './MoviesCards'
import { MoviesDataContext } from './data-context'

const Body: React.FC = () => {
  return (
    <div>
      <MoviesDataContext.Consumer>{movies => <MoviesCards movies={movies} />}</MoviesDataContext.Consumer>
    </div>
  )
}

export default Body
