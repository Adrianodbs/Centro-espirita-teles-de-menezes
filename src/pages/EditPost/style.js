import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  min-height: calc(100vh - 40px);

  .background {
    position: absolute;
    top: -40px;
    height: 40px;
    width: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 900px;
  width: 90%;

  h1 {
    margin: 20px;
  }

  form,
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    gap: 10px;
    max-width: 900px;
    width: 90%;
  }

  label {
    width: 100%;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .imagePreview {
    max-width: 600px;
    width: 90%;
    height: 400px;
    object-fit: contain;
  }

  input,
  textarea {
    max-width: 800px;
    width: 90%;
    height: 32px;
    border: none;
    border-radius: 4px;
    padding-left: 10px;
    margin-bottom: 20px;
  }

  textarea {
    resize: none;
    height: 150px;
    padding: 10px;
  }

  button {
    background-color: ${p => p.theme.primario};
    color: #fff;
    height: 32px;
    padding: 5px 20px;
    border: none;
    border-radius: 4px;

    font-size: 20px;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`
