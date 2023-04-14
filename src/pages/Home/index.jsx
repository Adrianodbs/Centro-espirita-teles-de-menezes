import espiritualidade from '../../../public/img/espiritualidade.jpg'
import * as C from './style'

function Home() {
  return (
    <C.Container>
      <C.Hero>
        <img src={espiritualidade} alt="Homem agradecendo ao senhor" />
        <h1>
          Um texto com alguma citação espírita <br /> <span>Autor</span>
        </h1>
      </C.Hero>
      <h1>testando</h1>
    </C.Container>
  )
}

export default Home
