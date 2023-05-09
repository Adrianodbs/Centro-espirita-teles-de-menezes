import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <h3>Centro espírita Teles de Menezes</h3>
      </StyledLogo>

      <ul>
        <Link to="/">Início</Link>
        <Link to="/sobre">Conteúdo</Link>
        <Link className="contato" to="/contato">
          Sobre nós
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
  background-color: transparent;
  position: relative;
  z-index: 99;

  @media (max-width: 900px) {
    padding: 0 20px;
  }

  @media (max-width: 560px) {
    justify-content: center;
  }

  ul {
    display: flex;
    gap: 20px;

    @media (max-width: 760px) {
      gap: 10px;
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

  .contato {
    background-color: ${p => p.theme.primario};
    color: #fff;
    border-radius: 4px;
  }
`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 560px) {
    display: none;
  }
  h3 {
    letter-spacing: 2px;
    color: #fff;

    @media (max-width: 760px) {
      font-size: 14px;
    }
  }

  img {
    width: 40px;
  }
`

export default Header
