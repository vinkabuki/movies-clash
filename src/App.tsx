import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Item from './Item'

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([])
  const [currentItem, setCurrentItem] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/recommendations/').then((response) => {
      setMovies(response.data)
      setCurrentItem(response.data[0])
    })
  }, [])

  useEffect(() => {
    if (currentItem !== null) {
      setCurrentItem(movies[count])
    }
  }, [currentItem, movies, count])

  const onAccept = (id) => {
    axios.put(`http://localhost:8000/accept/`, { id: id })
    setCount(count + 1)
  }

  const onReject = (id) => {
    axios.put(`http://localhost:8000/recommendations/${id}/reject/`)
    setCount(count + 1)
  }

  if (currentItem === null) {
    return <div>wait</div>
  } else if (count === movies.length) {
    return <div>there is no more movies</div>
  } else {
    return (
      <div className="App">
        <Item
          id={currentItem.id}
          imageURL={currentItem.imageURL}
          title={currentItem.title}
          summary={currentItem.summary}
          rating={currentItem.rating}
          onAccept={onAccept}
          onReject={onReject}
        ></Item>
      </div>
    )
  }
}

export default App
