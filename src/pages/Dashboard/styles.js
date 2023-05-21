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

export const Content = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  max-width: 780px;
  width: 90%;
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: 40px;
  border-radius: 8px;

  .contentPost {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    gap: 10px;
    align-items: center;

    p {
      font-size: 20px;
      font-weight: 400;
      width: 50%;
    }

    .btn {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      gap: 10px;

      a {
        text-decoration: none;
        background-color: ${p => p.theme.primario};
        color: #fff;

        padding: 5px 10px;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
          background-color: ${p => p.theme.secundario};
        }
      }

      button {
        background-color: #d73743;
        color: #fff;
        font-size: 16px;

        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${p => p.theme.cinza};

  .title {
    align-self: center;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .noPosts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px auto;

    p {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    a {
      font-size: 20px;
    }
  }

  .lineHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }

  span {
    font-size: 22px;
    font-weight: 500;
  }
`
