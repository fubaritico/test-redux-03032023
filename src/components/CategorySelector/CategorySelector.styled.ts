/* CategorySelector.styled.ts */
import styled, { css } from 'styled-components'

export const Root = styled.div`
  align-items: center;
  background-color: var(--category-selector-bg-color);
  border-radius: var(--border-radius-1);
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  margin-bottom: var(--spacing-3);
  padding: var(--spacing-2);
  position: relative;
  width: 100%;
`

export const HiddenMultipleChoice = styled.select`
  position: absolute;
  left: -10000px;
`

export const FakeMultipleChoice = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: var(--spacing-1);
`

export const FakeMultipleChoiceOption = styled.button<{ selected: boolean }>`
  align-items: center;
  border: 0 none;
  border-radius: var(--border-radius-1);
  cursor: pointer;
  display: flex;
  flex-flow: row;
  font-size: var(--font-size-1);
  justify-content: flex-start;
  padding: var(--padding-1) var(--padding-2);
  transition: background-color ease-in-out 300ms;

  ${({ selected }) =>
    selected
      ? css`
          background-color: var(--category-filter-btn-bg-color-selected);
          color: var(--category-filter-btn-text-color-selected);
        `
      : css`
          background-color: var(--category-filter-btn-bg-color);
          color: var(--category-filter-btn-text-color);
        `}
`
