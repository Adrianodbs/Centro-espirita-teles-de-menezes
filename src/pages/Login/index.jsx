import * as C from './style'
import paraiso from '../../../public/img/paraiso.jpg'

import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async e => {
    e.preventDefault()

    setError('')

    const user = {
      email,
      password
    }

    const res = await login(user)

    console.log(res)
  }

  useEffect(() => {
    console.log(authError)
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <C.Container>
      <img src={paraiso} alt="imagem" />
      <C.Form onSubmit={handleSubmit}>
        <C.Label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </C.Label>
        <C.Label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </C.Label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </C.Form>
    </C.Container>
  )
}

export default Login
