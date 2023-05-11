import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1b1b1b;
  color: #fff;
`

export const TopContainer = styled.div`
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    justify-content: center;
    flex-direction: column;
  }
`

export const BottomContainer = styled.div`
  background-color: #101010;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 770px) {
    padding: 10px 20px;
  }

  @media (max-width: 550px) {
    justify-content: center;
    flex-direction: column;
  }

  span {
    font-size: 18px;

    @media (max-width: 770px) {
      font-size: 14px;
    }

    @media (max-width: 550px) {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .login {
    background-color: #fff;
    color: #101010;
    padding: 5px 20px;
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
`

export const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 550px) {
    width: 100%;
  }
  h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  p {
    color: #b8dddd;
    line-height: 30px;
    font-size: 15px;
    width: 70%;
    margin-bottom: 20px;

    @media (max-width: 550px) {
      width: 100%;
    }
  }

  .redes {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 550px) {
      margin-bottom: 20px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      text-decoration: none;
      background-color: #252525;
      padding: 10px;
      font-size: 18px;
      color: #fff;
      transition: all 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`

export const Contact = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    width: 100%;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  p {
    line-height: 30px;
  }
`
