import amarelo from '../../../public/img/amarelo.jpg'
import * as C from './style'

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
      <h1>testando</h1>
    </C.Container>
  )
}

export default Home
