import React, { FC } from 'react'
import { Movie } from '@Redux/movies/types'
import { Root, StyledCard } from './Grid.styled'

export type GridProps = {
  paginatedMovies: Movie[]
}

const Grid: FC<GridProps> = ({ paginatedMovies }) => (
  <Root>
    {paginatedMovies.map((movie) => (
      <StyledCard key={movie.id} movie={movie} />
    ))}
  </Root>
)

export default Grid
