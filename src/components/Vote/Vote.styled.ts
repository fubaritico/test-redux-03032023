import styled from 'styled-components'

export const Root = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row;
  gap: var(--spacing-1);
`

export const VoteButton = styled.button`
  appearance: none;
  border: 0 none;
  border-radius: var(--border-radius-1);
  background: none;
  cursor: pointer;
  height: 24px;
  outline: 0 none;
  padding: var(--padding-1);
  transition: background-color 300ms;
  width: 24px;

  svg,
  path {
    stroke: var(--vote-button-stroke-color) !important;
  }

  &:hover {
    background: var(--color-5);

    svg,
    path {
      stroke: var(--vote-button-stroke-color-hover) !important;
    }
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`
export const VoteResult = styled.p`
  color: var(--vote-result-text-color);
  font-size: var(--font-size-1);
  font-weight: 400;
`
