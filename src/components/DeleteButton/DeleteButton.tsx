import React, { FC } from 'react'
import { ReactComponent as BinIcon } from '@Svg/bin.svg'
import { Root } from './DeleteButton.styled'

export type DeleteButtonProps = {
  handleDeleteClick: (id: string) => void
  id: string
}

const DeleteButton: FC<DeleteButtonProps> = ({ handleDeleteClick, id }) => (
  <Root aria-label="Remove" onClick={() => handleDeleteClick(id)} type="button">
    <BinIcon />
  </Root>
)

export default DeleteButton
