import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 40px);

  img {
    width: 100%;
    object-fit: cover;
    height: 100vh;
    position: absolute;
    top: -40px;
    z-index: 1;
  }
`

export const Form = styled.form`
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  max-width: 450px;
  height: 50vh;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.4);

  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${p => p.theme.primario};
    text-align: center;
    margin-bottom: 5px;
  }

  input {
    height: 36px;
    width: 80%;
    border: none;
    border-radius: 4px;
    padding-left: 10px;
  }
`
