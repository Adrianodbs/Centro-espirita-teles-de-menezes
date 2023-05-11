import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'

function Header() {
  const { user } = useAuthValue()

  const { logout } = useAuthentication()
  return (
    <StyledHeader>
      <ul>
        <Link to="/">Início</Link>
        <Link to="/conteudo">Conteúdo</Link>
        {user && (
          <Link className="contato" to="/conteudo/criar">
            Postar
          </Link>
        )}
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  background-color: transparent;
  position: relative;
  z-index: 99;

  @media (max-width: 900px) {
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    padding: 0 5px;
  }

  ul {
    display: flex;
    gap: 20px;

    @media (max-width: 760px) {
      gap: 10px;
    }

    @media (max-width: 500px) {
      gap: 5px;
    }
  }

  a {
    color: #fff;
    transition: all 0.2s;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 760px) {
      font-size: 14px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  button {
    color: ${p => p.theme.primario};
    background-color: #fff;
    border: none;
    border-radius: 4px;
    transition: all 0.2s;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 760px) {
      font-size: 14px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  .contato {
    background-color: ${p => p.theme.primario};
    color: #fff;
    border-radius: 4px;
  }
`

export default Header
