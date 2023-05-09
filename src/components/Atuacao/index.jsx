import * as C from './style'

import icon1 from '../../../public/img/icon-1.png'
import icon2 from '../../../public/img/icon-2.png'
import icon3 from '../../../public/img/icon-3.png'
import HeaderSection from '../HeaderSection'

function Atuacao() {
  return (
    <C.Atuacao>
      <HeaderSection
        texto1="Nossa área de atuação"
        texto2="Faça parte também dessa comunidade!"
      />
      <div className="atuacaoContent">
        <div className="contentItem">
          <img src={icon1} alt="exemplo 1" />
          <span>Exemplo 1</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="contentItem">
          <img src={icon2} alt="exemplo 2" />
          <span>Exemplo 2</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="contentItem">
          <img src={icon3} alt="exemplo 3" />
          <span>Exemplo 3</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </C.Atuacao>
  )
}

export default Atuacao
