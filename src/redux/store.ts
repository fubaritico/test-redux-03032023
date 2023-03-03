import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from '@Redux/pagination/slices'
import moviesReducer from '@Redux/movies/slices'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    pagination: paginationReducer,
  },
})
