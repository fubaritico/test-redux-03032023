import { FC, MouseEvent } from 'react'
import { ItemPerPageButon, Label, Root } from './ItemsPerPage.styled'

export type ItemsPerPageProps = {
  onOffsetChange: (event: MouseEvent, newValue: number) => void
  offset: number
}

const ItemsPerPage: FC<ItemsPerPageProps> = ({ offset, onOffsetChange }) => (
  <Root>
    <Label>ItemsPerPage</Label>
    <ItemPerPageButon
      type="button"
      onClick={(e) => onOffsetChange(e, 4)}
      selected={offset === 4}
    >
      4
    </ItemPerPageButon>
    <ItemPerPageButon
      type="button"
      onClick={(e) => onOffsetChange(e, 8)}
      selected={offset === 8}
    >
      8
    </ItemPerPageButon>
    <ItemPerPageButon
      type="button"
      onClick={(e) => onOffsetChange(e, 12)}
      selected={offset === 12}
    >
      12
    </ItemPerPageButon>
  </Root>
)

export default ItemsPerPage
