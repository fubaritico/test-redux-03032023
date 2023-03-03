/* PaginationButton.styled.ts */
import styled from 'styled-components'

export const Root = styled.button<{ selected?: boolean }>`
  align-items: center;
  border: 0 none;
  background-color: var(--pagination-button-bg-color);
  border-radius: var(--border-radius-1);
  cursor: pointer;
  display: flex;
  flex-flow: row;
  height: var(--small-icon-size);
  justify-content: flex-start;
  padding: var(--padding-1);
  width: var(--small-icon-size);

  svg path {
    fill: var(--pagination-button-fill-color);
  }
`
