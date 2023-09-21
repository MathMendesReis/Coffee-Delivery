import styled from 'styled-components'
import Title from './default-title'
import ListItens from './coffee-list'

export default function CoffeeCatalog(){
  
  return(
    <Container>
      <Title 
      text='NOSSOS CAFÉS'
      fontSize='3xl'
      />
      <ContainerList>
        <ListItens/>
      </ContainerList>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 1360px;
display: flex;
flex-direction: column;
gap: 25px;
`

const ContainerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px 20px;
  margin-top:60px ;

`