import styled from 'styled-components'
import ImageCoffee from './components/image-coffee'
import ListCategory from './components/list-category'
import Title from '../default-title'
import PriceCofee from './components/price'
import InputQuantity from './components/input-quantity'
import { ShoppingCart} from "@phosphor-icons/react";
import { Coffees } from '../../types/coffees'

export default function CardCoffee({item}:{item:Coffees}) {
  return(
    <ContainerCard>
      <ImageCoffee 
      imgUrl={item.imageUrl} 
      widthImg='7.5'
      heigthImg='7.5'
      isMarginTop={true}
      />
      <ContainerCategory>
        <ListCategory item={item}/>
      </ContainerCategory>
      <Title 
      fontSize='xl'
      text={item.name}
      />
      <Description>
        {item.description}
      </Description>
      <NavBar>
        <PriceCofee/>
        <InputQuantity item={item}/>
        <ButtonAddCart>
          <ShoppingCart color='white'/>
        </ButtonAddCart>
      </NavBar>
    </ContainerCard>
  )
}
const ContainerCard = styled.li`
width: 16rem;
height: 19.375rem;
flex-shrink: 0;
border-radius: 6px 36px;
background: ${({theme})=>theme.colors.baseCard};
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
gap: 7px;
`

const Description = styled.p`
  color: ${({theme})=>theme.colors.baseLabel};
  text-align: center;
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

const ButtonAddCart = styled.button`
border: none;
display: flex;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 6px;
background: ${({theme})=>theme.colors.purpleDark};

`
const ContainerCategory = styled.ul`
display: flex;
gap: 12px;
align-items: center;
justify-content: center;
width: 100%;
flex-wrap: wrap;
margin-top: 15px;
`