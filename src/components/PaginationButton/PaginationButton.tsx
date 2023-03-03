import { FC, MouseEvent } from 'react'
import { ReactComponent as PrevIcon } from '@Svg/prev.svg'
import { ReactComponent as NextIcon } from '@Svg/next.svg'
import { Root } from './PaginationButton.styled'

export type PaginationButtonProps = {
  handleClick: (e: MouseEvent) => void
  direction: 'prev' | 'next'
}

const PaginationButton: FC<PaginationButtonProps> = ({
  handleClick,
  direction,
}) => (
  <Root type="button" onClick={handleClick}>
    {direction === 'prev' ? <PrevIcon /> : null}
    {direction === 'next' ? <NextIcon /> : null}
  </Root>
)

export default PaginationButton
