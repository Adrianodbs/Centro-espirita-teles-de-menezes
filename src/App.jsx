import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

//Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Conteudo from './pages/Conteudo'
import Sobre from './pages/Sobre'
import CreatePost from './pages/CreatePost'
import Dashboard from './pages/Dashboard'

//context
import { AuthProvider } from './context/AuthContext'

import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }
  return (
    <AuthProvider value={{ user }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/conteudo" element={<Conteudo />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route
              path="/conteudo/criar"
              element={user ? <CreatePost /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
