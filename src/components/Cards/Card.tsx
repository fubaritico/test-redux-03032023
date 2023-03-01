import React, { FC, MouseEventHandler, useState } from 'react'
import {
  addDislike,
  addLike,
  Movie,
  removeMovie,
} from '@Redux/slices/moviesSlice'
import { useAppDispatch } from '@Redux/hooks'

export type CardProps = {
  movie: Movie
}

const Card: FC<CardProps> = ({ movie }) => {
  const dispatch = useAppDispatch()
  const [toggled, setToggled] = useState(false)

  const handleClick: MouseEventHandler = () => {
    if (toggled) {
      dispatch(addDislike(movie.id))
    } else {
      dispatch(addLike(movie.id))
    }
    setToggled(!toggled)
  }

  return (
    <article key={movie.id}>
      <h3>{movie.title}</h3>
      <h4>{movie.category}</h4>
      <p>Likes: {movie.likes}</p>
      <p>DisLikes: {movie.dislikes}</p>
      <button
        type="button"
        aria-label={toggled ? 'Dislike' : 'Like'}
        onClick={handleClick}
      >
        {toggled ? 'Dislike' : 'Like'}
      </button>
      <button
        type="button"
        aria-label="Remove"
        onClick={() => dispatch(removeMovie(movie.id))}
      >
        Remove
      </button>
    </article>
  )
}

export default Card
