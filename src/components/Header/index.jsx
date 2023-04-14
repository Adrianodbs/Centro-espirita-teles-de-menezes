import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <StyledHeader>
      <h3>Centro espírita Teles de Menezes</h3>
      <ul>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre nós</Link>
        <Link className="contato" to="/contato">
          Contato
        </Link>
      </ul>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  background-color: ${p => p.theme.primario};
  color: #fff;

  h3 {
    letter-spacing: 2px;
  }

  ul {
    display: flex;
    gap: 20px;
  }

  a {
    color: #fff;
    transition: all 0.2s;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      opacity: 0.7;
    }
  }

  .contato {
    background-color: #fff;
    color: ${p => p.theme.primario};
    border-radius: 4px;
  }
`

export default Header
