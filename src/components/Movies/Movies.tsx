import React, { FC, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '@Redux/hooks'
import { fetchMovies, getMovies } from '@Redux/slices/moviesSlice'
import Card from '@Components/Cards/Card'

const Movies: FC = () => {
  const movies = useAppSelector(getMovies)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        width: '50%',
        margin: '0 auto',
        gap: 10,
        justifyContent: 'space-between',
      }}
    >
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default Movies
