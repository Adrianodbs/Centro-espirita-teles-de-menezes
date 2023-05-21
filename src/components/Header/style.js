import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  background-color: transparent;
  position: relative;
  z-index: 3;

  .hamburguer {
    display: none;
  }

  @media (max-width: 900px) {
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    padding: 0 5px;
  }
  @media (max-width: 450px) {
    padding: 0;
    margin: 0;

    .menu.close {
      display: none;
    }

    .menu.open {
      display: flex;
    }

    .hamburguer {
      display: block;
      position: absolute;
      top: 4px;
      right: 4px;
      z-index: 33;
      cursor: pointer;
      color: ${p => p.theme.primario};
    }
  }

  ul {
    display: flex;
    gap: 20px;

    @media (max-width: 760px) {
      gap: 10px;
    }

    @media (max-width: 450px) {
      flex-direction: column;
      position: absolute;
      right: 0px;
      top: 0px;
      padding: 10px 20px;
      background-color: #fff;
    }
  }

  a {
    color: #fff;
    transition: all 0.2s;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 760px) {
      font-size: 14px;
    }

    @media (max-width: 450px) {
      font-size: 18px;
      color: ${p => p.theme.primario};
      margin-right: 10px;

      &:hover {
        background-color: ${p => p.theme.primario};
        color: #fff;
      }
    }

    &:hover {
      opacity: 0.7;
    }
  }

  button {
    color: ${p => p.theme.primario};
    background-color: #fff;
    border: none;
    border-radius: 4px;
    transition: all 0.2s;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 760px) {
      font-size: 14px;
    }

    @media (max-width: 450px) {
      font-size: 18px;
      color: ${p => p.theme.primario};
    }

    &:hover {
      opacity: 0.7;
    }
  }

  .contato {
    background-color: ${p => p.theme.primario};
    color: #fff;
    border-radius: 4px;

    @media (max-width: 450px) {
      font-size: 18px;
      color: ${p => p.theme.primario};
      background-color: transparent;
    }
  }
`
