import React, { ChangeEvent, FC, MouseEvent, useEffect } from 'react'

import type { Movie } from '@Redux/movies/types'
import type { PaginationState } from '@Redux/pagination/types'

import { useAppSelector, useAppDispatch } from '@Redux/hooks'
import { getAllMovies, getCategories, getMovies } from '@Redux/movies/selectors'
import {
  fetchMovies,
  resetSelectedMovies,
  selectMovies,
} from '@Redux/movies/actions'
import { getPagination } from '@Redux/pagination/selectors'
import { setOffset, setPage } from '@Redux/pagination/slices'

import Pagination from '@Components/Pagination/Pagination'
import Grid from '@Components/Grid/Grid'
import CategorySelector from '@Components/CategorySelector/CategorySelector'

import { Root } from './Movies.styled'

const Movies: FC = () => {
  const all = useAppSelector<Movie[]>(getAllMovies)
  const movies = useAppSelector<Movie[]>(getMovies)
  const categories = useAppSelector<string[]>(getCategories)
  const pagination = useAppSelector<PaginationState>(getPagination)
  const dispatch = useAppDispatch()

  const paginatedMovies = movies.filter(
    (movie, index) =>
      index >= pagination.startIndex && index <= pagination.endIndex
  )

  const pageChangeHandler = (event: MouseEvent, newValue: number) => {
    dispatch(setPage({ page: newValue, offset: pagination.offset }))
  }

  const onOffsetChange = (event: MouseEvent, newValue: number) => {
    dispatch(setOffset({ offset: newValue }))
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target
    const values = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        values.push(options[i].value)
      }
    }

    if (values.length > 0) {
      dispatch(
        selectMovies(all, {
          type: 'movies/selectMovies',
          payload: values,
        })
      )
    } else {
      dispatch(resetSelectedMovies(all))
    }
  }

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <Root>
      <CategorySelector categories={categories} handleChange={handleChange} />
      <Grid paginatedMovies={paginatedMovies} />
      <Pagination
        pagination={pagination}
        onPageChange={pageChangeHandler}
        onOffsetChange={onOffsetChange}
      />
    </Root>
  )
}

export default Movies
