import * as C from './style'
import { db } from '../../firebase/config'
import { Link } from 'react-router-dom'

//Img
import amarelo from '../../../public/img/amarelo.jpg'

//Components
import Atuacao from '../../components/Atuacao'
import Sobre from '../../components/Sobre'
import Footer from '../../components/Footer'
import Cards from '../../components/Cards'

function Home() {
  return (
    <C.Container>
      <C.Hero>
        <img src={amarelo} alt="Homem agradecendo ao senhor" />
        <h1>
          Não exija dos outros, qualidades que ainda não possui.
          <br /> <span>Chico Xavier</span>
          <p>Centro Espírita Teles de Menezes</p>
        </h1>
      </C.Hero>
      <Atuacao />
      <Sobre />
      <Cards />
      <Footer />
    </C.Container>
  )
}

export default Home
