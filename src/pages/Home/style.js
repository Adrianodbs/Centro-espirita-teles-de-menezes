import styled from 'styled-components'

export const Container = styled.div``

export const Hero = styled.div`
  position: relative;
  height: 500px;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  h1 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${p => p.theme.cinza};
    text-shadow: #fff 0.1em 0.1em 0.2em;
    width: 90%;

    span {
      font-size: 16px;
      font-weight: 400;
    }
  }
`
