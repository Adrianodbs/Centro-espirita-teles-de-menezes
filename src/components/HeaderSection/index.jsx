import styled from 'styled-components'

export default function HeaderSection({ texto1, texto2 }) {
  return (
    <Container>
      <h5>{texto1}</h5>
      <h4>{texto2}</h4>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`
