//import { useState, useEffect } from 'react'
import axios from 'axios'

const API = process.env.REACT_APP_API || 'https://frozen-inlet-56856.herokuapp.com'

const fetchMovies = async () => {
  const url = `${API}/recommendations/`
  return await axios.get(url)
}

const acceptMovie = async (id: string) => {
  const url = `${API}/recommendations/${id}/accept/`
  return await axios.put(url).catch((err) => console.log(err))
}

const rejectMovie = async (id: string) => {
  const url = `${API}/recommendations/${id}/reject/`
  return await axios.put(url).catch((err) => console.log(err))
}

export default {
  fetchMovies,
  acceptMovie,
  rejectMovie
}
