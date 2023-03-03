/* ItemsPerPage.styled.ts */
import styled, { css } from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-flow: row;
  margin: 0 auto;
  justify-self: center;
  align-items: center;
  gap: var(--spacing-1);
`

export const Label = styled.p`
  font-size: var(--font-size-1);
  margin-right: var(--padding-2);
  color: var(--items-per-page-label-text-color);
`

export const ItemPerPageButon = styled.button<{ selected?: boolean }>`
  align-items: center;
  border: 0 none;
  border-radius: var(--border-radius-1);
  cursor: pointer;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  padding: var(--padding-1) var(--padding-2);
  transition: background-color ease-in-out 300ms;

  ${({ selected }) =>
    selected
      ? css`
          background-color: var(--items-per-page-btn-bg-color-selected);
          color: var(--items-per-page-btn-text-color-selected);
        `
      : css`
          background-color: var(--items-per-page-btn-bg-color);
          color: var(--items-per-page-btn-text-color);
        `}
`
