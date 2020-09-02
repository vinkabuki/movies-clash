import React, { useState, useEffect } from 'react'
import { MoviesDataContext } from './data-context'
import api from './Api'
import Layout from './Layout'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    api.fetchMovies().then((response) => {
      setMovies(response.data)
    })
  }, [movies])

  if (movies.length === 0) {
    return <div>waiting for data</div>
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
