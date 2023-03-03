import React, { FC } from 'react'
import GlobalStyles from '@Styles/Global'
import Movies from '@Components/Movies/Movies'
import { Root } from '@Components/App.styled'

const App: FC = () => (
  <Root>
    <GlobalStyles />
    <Movies />
  </Root>
)

export default App
