import {
  ActionReducerMapBuilder,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit'
import {
  getLoadedMovies,
  removeMovie,
  resetSelectedMovies,
  selectMovies,
} from '@Redux/movies/actions'
import {
  PaginationState,
  SetOffsetPayload,
  SetPagePayload,
} from '@Redux/pagination/types'
import { MoviesState } from '@Redux/movies/types'

const initialState: PaginationState = {
  offset: 4,
  totalItems: 0,
  page: 1,
  pages: 0,
  startIndex: 0,
  endIndex: 0,
}

const reInitPagination = (
  state: Draft<PaginationState>
): Draft<PaginationState> => {
  state.pages = Math.ceil(state.totalItems / state.offset)
  state.page = 1
  state.startIndex = (state.page - 1) * state.offset
  state.endIndex = state.startIndex + state.offset - 1
  return state
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setOffset: (
      state: Draft<PaginationState>,
      action: PayloadAction<SetOffsetPayload>
    ) => {
      const { payload } = action

      state.offset = payload.offset
      reInitPagination(state)
    },
    setPage: (
      state: Draft<PaginationState>,
      action: PayloadAction<SetPagePayload>
    ) => {
      const { payload } = action

      state.page = payload.page
      state.startIndex = (state.page - 1) * payload.offset
      state.endIndex = state.startIndex + state.offset - 1
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<PaginationState>) => {
    builder
      .addCase(
        getLoadedMovies,
        (
          state: Draft<PaginationState>,
          action: PayloadAction<Pick<MoviesState, 'list'>>
        ) => {
          state.totalItems = action.payload.list.length
          reInitPagination(state)
        }
      )
      .addCase(
        removeMovie,
        (
          state: Draft<PaginationState>,
          action: PayloadAction<Pick<MoviesState, 'list'>>
        ) => {
          const { payload } = action

          state.totalItems = payload.list.filter((m) => m.selected).length
          state.pages = Math.ceil(state.totalItems / state.offset)
          state.page = state.page >= state.pages ? state.pages : state.page
          state.startIndex =
            state.totalItems === 0 ? 0 : (state.page - 1) * state.offset
          state.endIndex =
            state.pages === 0 ? 0 : state.startIndex + state.offset - 1
        }
      )
      .addCase(
        selectMovies,
        (
          state: Draft<PaginationState>,
          action: PayloadAction<Pick<MoviesState, 'list'>>
        ) => {
          const { payload } = action

          state.totalItems = payload.list.filter((m) => m.selected).length
          state.pages = Math.ceil(state.totalItems / state.offset)
          state.page = 1
          state.startIndex =
            state.totalItems === 0 ? 0 : (state.page - 1) * state.offset
          state.endIndex =
            state.pages === 0 ? 0 : state.startIndex + state.offset - 1
        }
      )
      .addCase(
        resetSelectedMovies,
        (
          state: Draft<PaginationState>,
          action: PayloadAction<Pick<MoviesState, 'list'>>
        ) => {
          const { payload } = action

          state.totalItems = payload.list.filter((m) => m.selected).length
          reInitPagination(state)
        }
      )
  },
})

export const { setOffset, setPage } = paginationSlice.actions

export default paginationSlice.reducer
