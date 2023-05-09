import styled from 'styled-components'

export const Atuacao = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 10px;
  width: 90%;
  max-width: 900px;

  h5 {
    color: #2a96ec;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 36px;
    color: #333333;
    margin-bottom: 20px;
    font-weight: bold;

    @media (max-width: 770px) {
      font-size: 26px;
      text-align: center;
    }
  }

  .atuacaoContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    gap: 10px;
  }

  .contentItem {
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 10px;

    @media (max-width: 770px) {
      width: 200px;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 100px;
    }

    span {
      font-weight: bold;
      font-size: 20px;
      color: #333333;
      margin: 15px 0;
    }

    p {
      font-weight: 300;
      color: ${p => p.theme.cinza};

      @media (max-width: 770px) {
        text-align: center;
      }
    }
  }
`
