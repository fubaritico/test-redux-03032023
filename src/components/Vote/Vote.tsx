import React, { FC, MouseEventHandler, useState } from 'react'

import { ReactComponent as ThumbUpIcon } from '@Svg/thumb-up.svg'
import { ReactComponent as ThumbDownIcon } from '@Svg/thumb-down.svg'
import { Root, VoteButton, VoteResult } from './Vote.styled'

export type VoteProps = {
  data: string
  handleClick: (data: string, toggled: boolean) => void
  likes: number
  dislikes: number
}

const Vote: FC<VoteProps> = ({ handleClick, data, likes, dislikes }) => {
  const [toggled, setToggled] = useState(false)

  const onClick: MouseEventHandler = () => {
    handleClick(data, toggled)
    setToggled(!toggled)
  }

  return (
    <Root>
      <VoteButton
        aria-label="Like"
        onClick={onClick}
        type="button"
        disabled={toggled}
      >
        <ThumbUpIcon />
      </VoteButton>
      <VoteResult>{likes}</VoteResult>
      <VoteButton
        aria-label="Like"
        onClick={onClick}
        type="button"
        disabled={!toggled}
      >
        <ThumbDownIcon />
      </VoteButton>
      <VoteResult>{dislikes}</VoteResult>
    </Root>
  )
}

export default Vote
