/* App.styled.ts */
import styled from 'styled-components'
import { breakpoints } from '@Styles/Global'

export const Root = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: var(--padding-4);

  @media ${breakpoints.laptop} {
    height: 100vh;
    padding: var(--padding-2);
  }
`
