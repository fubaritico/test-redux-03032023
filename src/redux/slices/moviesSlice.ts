import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// eslint-disable-next-line import/extensions
import { movies$ } from '@/movies'

export interface Movie {
  id: string
  title: string
  category: string
  likes: number
  dislikes: number
}

export interface MoviesState {
  list: Movie[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: MoviesState = {
  list: [],
  status: 'idle',
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await movies$()
  return response
})

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
    removeMovie: (state, action: PayloadAction<string>) => {
      const { payload } = action
      state.list = state.list.filter((m) => m.id !== payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.status = 'idle'
          state.list = action.payload
        }
      )
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { addLike, addDislike, removeMovie } = moviesSlice.actions

export const getMovies = (state: RootState) => state.movies.list

export default moviesSlice.reducer
