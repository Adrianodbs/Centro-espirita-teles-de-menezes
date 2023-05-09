import styled from 'styled-components'

export const Container = styled.div``

export const Hero = styled.div`
  position: relative;
  height: 500px;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    position: absolute;
    top: -40px;
    z-index: 1;
  }

  h1 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
    width: 60%;
    z-index: 1;
    font-size: 46px;
    @media (max-width: 760px) {
      font-size: 36px;
    }

    span {
      font-size: 28px;
      font-weight: 400;

      @media (max-width: 760px) {
        font-size: 20px;
      }
    }
  }
`

export const Footer = styled.footer``
