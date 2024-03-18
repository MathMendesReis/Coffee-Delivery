import styled from 'styled-components'
import Title from '../components/default-title'
import ListIconWithInfo from '../components/list-icon-with-info'
import Image from '../assets/Imagem.svg'
import CoffeeCatalog from '../components/coffee-catalog'

export default function Home() {
  return (
    <Container id='homepage'>
      <Banner>
        <ContainerText>
          <Title
            text="Encontre o café perfeito para qualquer hora do dia"
            fontSize="4xl"
          />
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
          <ListIconWithInfo />
        </ContainerText>
        <img src={Image} alt="" />
      </Banner>

      <CoffeeCatalog />
    </Container>
  )
}

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.baseSubtitle};
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Container = styled.section`
 
`
const Banner = styled.section`
  min-height: 34rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  max-width: 1440px;
  > img {
    width: 100%;
    max-width: 500px;
  }
  @media (max-width: 750px) {
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
`
