import * as C from './style'
import { db } from '../../firebase/config'
import { Link } from 'react-router-dom'

//Img
import amarelo from '../../../public/img/amarelo.jpg'

//Components
import Atuacao from '../../components/Atuacao'
import Sobre from '../../components/Sobre'

function Home() {
  return (
    <C.Container>
      <C.Hero>
        <img src={amarelo} alt="Homem agradecendo ao senhor" />
        <h1>
          Não exija dos outros, qualidades que ainda não possui.
          <br /> <span>Chico Xavier</span>
        </h1>
      </C.Hero>
      <Atuacao />
      <Sobre />
      <C.Footer>
        <Link to="/login">Admin</Link>
      </C.Footer>
    </C.Container>
  )
}

export default Home
