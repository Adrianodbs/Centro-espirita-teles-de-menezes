import * as C from './style'

import about from '../../../public/img/about.jpg'

function Sobre() {
  return (
    <C.Container>
      <C.Content>
        <img src={about} alt="exemplo" />
        <div className="texto">
          <h5>Sobre nós</h5>
          <h2>Centro espírita Teles de Menezes.</h2>
          <p>
            O Centro Espírita Teles de Menezes é uma instituição espiritualista
            localizada em Mundo Novo - Bahia e foi fundado no dia 16 de março de
            1983, após um período de inatividade, o centro foi reativado em 29
            de junho de 1988.
          </p>
          <br />
          <h5>Membros fundadores</h5>
          <p>
            Marly Barcelar Rios, Janilda Silva Lopes, Marival Nery da Silva,
            Adélia Souza Ameida, Delza Augusta de Oliveira, Francisco Augusto de
            Oliveira, Antonio Gutemberg Tavares de Matos, Assidalvo Adolfo de
            Souza e Silva, José Carlos Durães, João da Silva Oliveira, Anolírio
            Peixoto de Araujo, Elvira Francisca Dourado, Vilma Lima Cruz e Gilda
            de Almeida Fortes.
          </p>
          <p>
            <strong>Membros do grupo que reativaram:</strong> Adélia Souza
            Almeida, Marli Barcelar Rios, Antonia Gomes Melo, Ivete Sampaio
            Teixeira, Josiane Leal de Araujo, Helena Rita Silva Leite, Vera
            Lúcia dos Santos, Rodolfo Brasileiro Teixeira, José Carlos Durães,
            Ari Silva Carvalho, Ailton Luís Sampaio Fernandes, Cledson Marlons
            Pineiro Sady e Arlene Pereira Mendes Sady.
          </p>
        </div>
      </C.Content>
    </C.Container>
  )
}

export default Sobre
