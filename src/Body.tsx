import React from 'react'

import MoviesCards from './MoviesCards'
import { MoviesDataContext } from './data-context'

const Body: React.FC = () => {
  return <MoviesDataContext.Consumer>{(movies) => <MoviesCards movies={movies} />}</MoviesDataContext.Consumer>
}

export default Body
