import { Link } from 'react-router-dom'
import * as C from './style'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'
import { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseSquare } from 'react-icons/ai'

function Header() {
  const { user } = useAuthValue()

  const { logout } = useAuthentication()

  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <C.StyledHeader>
      <div className={`${isOpen ? 'menu open' : 'menu close'}`}>
        <ul>
          <Link to="/" onClick={closeMenu}>
            Início
          </Link>
          <Link to="/conteudo" onClick={closeMenu}>
            Conteúdo
          </Link>
          {user && (
            <Link to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>
          )}
          {user && (
            <Link className="contato" to="/conteudo/criar" onClick={closeMenu}>
              Postar
            </Link>
          )}

          {user && (
            <li>
              <button
                onClick={() => {
                  logout()
                  closeMenu()
                }}
              >
                Sair
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="hamburguer">
        {isOpen ? (
          <AiFillCloseSquare onClick={() => setIsOpen(!isOpen)} size={25} />
        ) : (
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} size={25} />
        )}
      </div>
    </C.StyledHeader>
  )
}

export default Header
