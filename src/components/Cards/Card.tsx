import React, { FC } from 'react'

import type { Movie } from '@Redux/movies/types'

import { useAppDispatch, useAppSelector } from '@Redux/hooks'
import { getAllMovies } from '@Redux/movies/selectors'
import { addDislike, addLike } from '@Redux/movies/slices'
import { removeMovie } from '@Redux/movies/actions'
import {
  CardBody,
  CardFooter,
  Category,
  Root,
  Title,
} from '@Components/Cards/Card.styled'

import Vote from '@Components/Vote/Vote'
import DeleteButton from '@Components/DeleteButton/DeleteButton'

export type CardProps = {
  className?: string
  movie: Movie
}

const Card: FC<CardProps> = ({ movie, className }) => {
  const movies = useAppSelector<Movie[]>(getAllMovies)
  const dispatch = useAppDispatch()

  const handleVoteClick = (data: string, toggled: boolean) => {
    if (toggled) {
      dispatch(addDislike(data))
    } else {
      dispatch(addLike(data))
    }
  }

  const handleDeleteClick = (id: string) =>
    dispatch(
      removeMovie(movies, {
        type: 'movies/removeMovie',
        payload: id,
      })
    )

  return (
    <Root className={className}>
      <CardBody>
        <Title>{movie.title}</Title>
        <Category>{movie.category}</Category>
      </CardBody>
      <CardFooter>
        <Vote
          data={movie.id}
          dislikes={movie.dislikes}
          handleClick={handleVoteClick}
          likes={movie.likes}
        />
        <DeleteButton
          aria-label="Remove"
          handleDeleteClick={handleDeleteClick}
          id={movie.id}
        />
      </CardFooter>
    </Root>
  )
}

export default Card
