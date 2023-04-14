import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Centro</h1>
    </ThemeProvider>
  )
}

export default App
