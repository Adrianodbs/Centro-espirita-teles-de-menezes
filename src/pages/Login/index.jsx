import * as C from './style'
import paraiso from '../../../public/img/paraiso.jpg'

function Login() {
  return (
    <C.Container>
      <img src={paraiso} alt="imagem" />
      <C.Form>
        <C.Label>
          <span>E-mail</span>
          <input type="text" placeholder="digite o seu e-mail" />
        </C.Label>
        <C.Label>
          <span>Senha</span>
          <input type="text" placeholder="digite a sua senha" />
        </C.Label>
      </C.Form>
    </C.Container>
  )
}

export default Login
