import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fef4e7;
  width: 100%;

  .amarelo {
    position: absolute;
    width: 100%;
    height: 40px;
    object-fit: cover;
    top: 0;
    z-index: 1;
  }
`

export const Content = styled.div`
  padding: 40px 60px;
  display: flex;
  gap: 30px;
  min-height: calc(100vh - 40px);

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 40px 20px;
  }

  img {
    max-width: 400px;
    width: 90%;
    height: 400px;
    object-fit: cover;
  }

  h5 {
    color: #6696ec;
    font-size: 20px;
    background-color: #face29;
    width: 110px;
    text-align: center;
    padding: 10px 0;
  }

  h2 {
    color: #333333;
    font-size: 30px;
    margin: 25px 0;
  }

  p {
    line-height: 30px;
  }
`
