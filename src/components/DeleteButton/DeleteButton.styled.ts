/* DeleteButton.styled.ts */
import styled from 'styled-components'

export const Root = styled.button`
  appearance: none;
  border: 1px solid var(--delete-btn-border-color);
  transition: border ease-in 300ms;
  background: none;
  cursor: pointer;
  height: var(--small-icon-size);
  outline: 0 none;
  padding: var(--padding-1);
  width: var(--small-icon-size);

  svg,
  path,
  rect {
    stroke: none;
    fill: var(--delete-btn-fill-color) !important;
  }

  &:hover {
    border: 1px solid var(--delete-btn-border-color-hover);

    svg,
    path,
    rect {
      stroke: none;
      fill: var(--delete-btn-fill-color-hover) !important;
    }
  }
`
