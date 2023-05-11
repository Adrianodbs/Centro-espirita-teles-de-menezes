import * as C from './style'

import about from '../../../public/img/about.jpg'

function Sobre() {
  return (
    <C.Container>
      <C.Content>
        <img src={about} alt="exemplo" />
        <div className="texto">
          <h5>Sobre nós</h5>
          <h2>
            We’re worldwide non-profit <br /> charity foundation.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nostrud consectetur adipiscing elit. <br /> <br />{' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nostrud consectetur adipiscing elit.
          </p>
        </div>
      </C.Content>
    </C.Container>
  )
}

export default Sobre
