/* Card.styled.ts */
import styled from 'styled-components'

export const Root = styled.article`
  display: flex;
  flex-flow: column;
`
export const Title = styled.h3`
  color: var(--card-title-text-color);
  font-size: var(--font-size-2);
  font-weight: 400;
  margin-bottom: var(--spacing-1);
`
export const Category = styled.p`
  color: var(--card-category-text-color);
  font-size: var(--font-size-1);
  margin-bottom: var(--spacing-2);
`

export const CardBody = styled.section`
  align-items: flex-start;
  background-color: var(--card-body-bg-color);
  border-top-left-radius: var(--border-radius-1);
  border-top-right-radius: var(--border-radius-1);
  display: flex;
  flex-flow: column;
  margin-bottom: 2px;
  padding: var(--spacing-2);
  width: 100%;
`

export const CardFooter = styled.footer`
  align-items: flex-end;
  background-color: var(--card-footer-bg-color);
  border-bottom-left-radius: var(--border-radius-1);
  border-bottom-right-radius: var(--border-radius-1);
  display: flex;
  flex-flow: row;
  gap: var(--spacing-1);
  justify-content: space-between;
  padding: var(--spacing-1);
  width: 100%;
`
