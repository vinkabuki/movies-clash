import React from 'react'

import Item from './Item'
import fetchMoviesData from './Fetch'

function App() {
  const movies = fetchMoviesData()

  if (movies === null) {
    return <div>wait</div>
  } else {
    return (
      <div className="App">
        <Item movies={movies}></Item>
      </div>
    )
  }
}

export default App
