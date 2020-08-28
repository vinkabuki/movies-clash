import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchMoviesData = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/vinkabuki/ti/recommendations')
      .then((response) => {
        setMovies(response.data)
        return response.data
      })
      .catch((err) => console.log(err))
  }, [])
  return movies
}

export default FetchMoviesData
