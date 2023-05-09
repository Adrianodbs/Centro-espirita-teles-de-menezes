import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

//Pages
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
