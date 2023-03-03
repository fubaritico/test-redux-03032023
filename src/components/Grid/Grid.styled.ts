/* Grid.styled.ts */
import styled from 'styled-components'
import Card from '@Components/Cards/Card'
import { breakpoints, size } from '@Styles/Global'

export const StyledCard = styled(Card)``

export const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  gap: var(--spacing-2);
  justify-content: flex-start;
  width: 100%;

  ${StyledCard} {
    border: 4px solid transparent;
    width: 100%;
  }

  @media ${breakpoints.tablet} {
    max-width: ${size.tablet};
  }

  @media ${breakpoints.laptop} {
    width: 800px;

    ${StyledCard} {
      border: 2px solid transparent;
      flex: 1 0 21%;
    }
  }

  @media ${breakpoints.desktop} {
    width: 1400px;

    ${StyledCard} {
      border: 4px solid transparent;
      width: 200px;
    }
  }
`
