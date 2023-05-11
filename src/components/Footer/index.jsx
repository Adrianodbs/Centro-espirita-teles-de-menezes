import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import * as C from './style'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <C.Container>
      <C.TopContainer>
        <C.Info>
          <h1>Centro Espírita Teles de Menezes</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nostrud consectetur adipiscing elit.
          </p>

          <div className="redes">
            <a href="#" target="_blank">
              <BsInstagram />
            </a>
            <a href="#" target="_blank">
              <BsFacebook />
            </a>
            <a href="#" target="_blank">
              <BsYoutube />
            </a>
          </div>
        </C.Info>

        <C.Contact>
          <h2>Contato</h2>
          <p>Rua Coronel Tamarindo, Mundo Novo, Bahia</p>
          <p>E-mail: xxxxxx@xxxxxxxx</p>
          <p>Telefone:(74)999999-9999</p>
        </C.Contact>
      </C.TopContainer>

      <C.BottomContainer>
        <span>
          &copy; - Todos os direitos reservados - Desenvolvido por Adriano Alves
        </span>
        <Link to="/login" className="login">
          Login
        </Link>
      </C.BottomContainer>
    </C.Container>
  )
}

export default Footer
