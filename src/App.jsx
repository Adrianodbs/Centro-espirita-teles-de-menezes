import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

//Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Conteudo from './pages/Conteudo'
import Sobre from './pages/Sobre'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/conteudo" element={<Conteudo />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
