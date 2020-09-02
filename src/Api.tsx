//import { useState, useEffect } from 'react'
import axios from 'axios'

const API = 'http://frozen-inlet-56856.herokuapp.com'

/**
const FetchMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get(`{${API}/recommendations`)
      .then((response) => {
        setMovies(response.data)
      })
      .catch((err) => console.log(err))
  }, [])
  return movies
}
*/

export const fetchMovies = async () => {
  const url = `${API}/recommendations/`

  return await axios.get(url)
}

const acceptMovie = (id: string) => {
  axios.put(`${API}/recommendations/${id}/accept/`).catch((err) => console.log(err))
}
const rejectMovie = (id: string) => {
  axios.put(`${API}/recommendations/${id}/reject/`).catch((err) => console.log(err))
}

export default {
  fetchMovies: fetchMovies,
  acceptMovie,
  rejectMovie,
  API
}
