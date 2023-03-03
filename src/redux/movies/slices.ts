import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import {
  fetchMovies,
  removeMovie,
  resetSelectedMovies,
  selectMovies,
} from '@Redux/movies/actions'
import type { Movie, MoviesState } from '@Redux/movies/types'

const initialState: MoviesState = {
  list: [],
  status: 'loading',
  categories: [],
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<string>) => {
      const { payload } = action
      const movie = state.list.find((m) => m.id === payload)

      if (movie) {
        if (movie.dislikes > 0) {
          movie.dislikes -= 1
        }
        movie.likes += 1
      }
    },
    addDislike: (state, action: PayloadAction<string>) => {
      const { payload } = action
      const movie = state.list.find((m) => m.id === payload)

      if (movie) {
        if (movie.likes > 0) {
          movie.likes -= 1
        }
        movie.dislikes += 1
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchMovies.fulfilled,
        (state: Draft<MoviesState>, action: PayloadAction<Movie[]>) => {
          const { payload } = action

          state.status = 'success'
          state.list = payload.map((movie) => {
            const mutableMovie = { ...movie }
            mutableMovie.selected = true
            return mutableMovie
          })
          state.categories = [...new Set(state.list.map((o) => o.category))]
        }
      )
      .addCase(fetchMovies.rejected, (state: Draft<MoviesState>) => {
        state.status = 'failed'
      })
      .addCase(
        removeMovie,
        (
          state: Draft<MoviesState>,
          action: PayloadAction<Pick<MoviesState, 'list'>>
        ) => {
          state.list = action.payload.list
        }
      )
      .addCase(
        selectMovies,
        (
          state: Draft<MoviesState>,
          action: PayloadAction<Pick<MoviesState, 'list'>>
        ) => {
          state.list = action.payload.list
        }
      )
      .addCase(
        resetSelectedMovies,
        (
          state: Draft<MoviesState>,
          action: PayloadAction<Pick<MoviesState, 'list'>>
        ) => {
          state.list = action.payload.list
        }
      )
  },
})

export const { addLike, addDislike } = moviesSlice.actions

export default moviesSlice.reducer
