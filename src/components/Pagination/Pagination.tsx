import { FC, MouseEvent } from 'react'
import type { PaginationState } from '@Redux/pagination/types'
import ItemsPerPage from '@Components/ItemsPerPage/ItemsPerPage'
import { Root } from '@Components/Pagination/Pagination.styled'
import PaginationButton from '@Components/PaginationButton/PaginationButton'

export type PaginationProps = {
  pagination: PaginationState
  onPageChange: (event: MouseEvent, newValue: number) => void
  onOffsetChange: (event: MouseEvent, newValue: number) => void
}

const Pagination: FC<PaginationProps> = ({
  pagination,
  onPageChange,
  onOffsetChange,
}) => {
  const { page, pages, endIndex, totalItems, offset } = pagination

  const showPrevButton = page > 1
  const showNextButton = endIndex < totalItems && pages !== 1 && pages !== page

  const handlePrevPage = (e: MouseEvent) => onPageChange(e, page - 1)
  const handleNextPage = (e: MouseEvent) => onPageChange(e, page + 1)

  return (
    <Root>
      {showPrevButton ? (
        <PaginationButton handleClick={handlePrevPage} direction="prev" />
      ) : null}
      <ItemsPerPage onOffsetChange={onOffsetChange} offset={offset} />
      {showNextButton ? (
        <PaginationButton handleClick={handleNextPage} direction="next" />
      ) : null}
    </Root>
  )
}

export default Pagination
