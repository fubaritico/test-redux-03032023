import { createSelector } from '@reduxjs/toolkit'
import { MoviesState } from '@Redux/movies/types'

export const getMoviesState = (state: RootState): MoviesState => state.movies

export const getMovies = createSelector(getMoviesState, (state: MoviesState) =>
  state.list.filter((m) => m.selected)
)

export const getAllMovies = createSelector(
  getMoviesState,
  (state: MoviesState) => state.list
)

export const getCategories = createSelector(
  getMoviesState,
  (state: MoviesState) => state.categories
)
