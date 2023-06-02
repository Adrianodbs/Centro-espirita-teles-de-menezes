import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  .banner {
    position: fixed;
    width: 100%;
    height: calc(100vh + 40px);
    top: -40px;
    object-fit: cover;
    z-index: 1;
  }
`

export const Header = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 15px;

  h1 {
    color: #fff;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 600px;
    width: 90%;
    margin-bottom: 90px;

    input {
      border: none;
      height: 32px;
      border-radius: 4px;
      padding-left: 10px;
      max-width: 200px;
      width: 50%;
    }

    button {
      border: none;
      height: 32px;
      background-color: ${p => p.theme.primario};
      color: #fff;
      border-radius: 4px;
      padding: 5px 20px;
      font-size: 17px;
      font-weight: 500;
    }
  }
`

export const Content = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 450px) {
    margin-top: 30px;
  }

  .post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    background-color: #fafafa;
    width: 80%;
    border-radius: 8px;
    padding: 20px;

    h3 {
      color: ${p => p.theme.primario};
      font-size: 28px;
      margin-bottom: 22px;
    }

    img {
      max-width: 600px;
      width: 90%;
      height: 400px;
      object-fit: contain;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      margin-top: 30px;
      padding: 15px;
      white-space: pre-wrap;
      align-self: flex-start;
      line-height: 150%;
    }

    .tag {
      display: flex;
      flex-direction: row;
    }
  }
`
