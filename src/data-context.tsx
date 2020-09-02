import React from 'react'
import { ItemType } from './MovieCard'

export const MoviesDataContext = React.createContext<Array<ItemType>>([])
