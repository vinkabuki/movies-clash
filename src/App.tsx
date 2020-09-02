import React, { useState, useEffect } from 'react'
import { MoviesDataContext } from './data-context'
import api from './Api'
import Layout from './Layout'
import { ItemType } from './MovieCard'

const App: React.FC = () => {
  const [movies, setMovies] = useState<Array<ItemType>>([])
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    api
      .fetchMovies()
      .then((response) => {
        setMovies(response.data)
      })
      .catch(() => setIsError(true))
  }, [movies])

  if (movies.length === 0) {
    return <div>waiting for data</div>
  } else if (isError) {
    return <div>There is problem with retrieving data from the server.</div>
  } else {
    return (
      <MoviesDataContext.Provider value={movies}>
        <div className="App">
          <Layout />
        </div>
      </MoviesDataContext.Provider>
    )
  }
}

export default App
