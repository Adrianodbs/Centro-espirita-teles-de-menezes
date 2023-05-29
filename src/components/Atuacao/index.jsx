import * as C from './style'

import icon1 from '../../../public/img/oracao.png'
import icon2 from '../../../public/img/bem-estar-espiritual.png'
import icon3 from '../../../public/img/espiritual.png'
import icon4 from '../../../public/img/pobreza.png'
import HeaderSection from '../HeaderSection'

function Atuacao() {
  return (
    <C.Atuacao>
      <HeaderSection
        texto1="Os objetivos do Centro Espírita"
        texto2="Faça parte também dessa comunidade!"
      />
      <h5>
        Os Centros Espíritas têm por objetivo promover o estudo, a difusão e a
        prática da Doutrina Espírita, codificada por Allan Kardec, auxiliando na
        formação do homem de bem, acolhendo, consolando, esclarecendo e
        orientando as pessoas que:
      </h5>
      <div className="atuacaoContent">
        <div className="contentItem">
          <img src={icon1} alt="exemplo 1" />
          <p>
            Buscam compreensão e amparo para seus problemas espirituais, morais
            e materiais.
          </p>
        </div>
        <div className="contentItem">
          <img src={icon2} alt="exemplo 2" />

          <p>Desejam conhecer e estudar a Doutrina Espírita</p>
        </div>
        <div className="contentItem">
          <img src={icon3} alt="exemplo 3" />
          <p>
            Querem trabalhar, colaborar e servir em qualquer área de ação que a
            prática espírita oferece.
          </p>
        </div>
        <div className="contentItem">
          <img src={icon4} alt="exemplo 3" />
          <p>
            Estão em estado de vulnerabilidade social, de saúde física e/ou
            emocional.
          </p>
        </div>
      </div>
    </C.Atuacao>
  )
}

export default Atuacao
