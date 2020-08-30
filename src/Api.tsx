import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get(`https://frozen-inlet-56856.herokuapp.com/recommendations`)
      .then((response) => {
        setMovies(response.data)
        return response.data
      })
      .catch((err) => console.log(err))
  }, [])
  return movies
}

const acceptMovie = (id: string) => {
  axios.put(`https://frozen-inlet-56856.herokuapp.com/recommendations/${id}/accept/`).catch((err) => console.log(err))
}
const rejectMovie = (id: string) => {
  axios.put(`https://frozen-inlet-56856.herokuapp.com/recommendations/${id}/reject/`).catch((err) => console.log(err))
}

export default {
  fetchMovies: FetchMovies,
  acceptMovie,
  rejectMovie
}
