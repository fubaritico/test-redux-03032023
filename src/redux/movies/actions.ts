import { createAction, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { Movie } from '@Redux/movies/types'
// eslint-disable-next-line import/extensions
import { movies$ } from '@/movies'

export const getLoadedMovies = createAction(
  'movies/getLoadedMovies',
  (movies: Movie[]) => ({
    payload: {
      list: movies,
    },
  })
)

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, thunkAPI) => {
    const response = await movies$()
    thunkAPI.dispatch(getLoadedMovies(response))
    return response
  }
)

export const removeMovie = createAction(
  'movies/removeMovie',
  (state: Movie[], action: PayloadAction<string>) => {
    const { payload } = action
    return {
      payload: {
        list: state.filter((m) => m.id !== payload),
      },
    }
  }
)

export const selectMovies = createAction(
  'movies/selectMovies',
  (state: Movie[], action: PayloadAction<string[]>) => {
    const { payload } = action
    return {
      payload: {
        list: state.map((m: Movie) => {
          const mutable = { ...m }
          mutable.selected = payload.includes(m.category)
          return mutable
        }),
      },
    }
  }
)

export const resetSelectedMovies = createAction(
  'movies/resetSelectedMovies',
  (state: Movie[]) => ({
    payload: {
      ...state,
      list: state.map((m: Movie) => {
        const mutable = { ...m }
        mutable.selected = true
        return mutable
      }),
    },
  })
)
