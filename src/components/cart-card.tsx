import styled from 'styled-components'
import ImageCoffee from './card-coffee/components/image-coffee'
import InputQuantity from './card-coffee/components/input-quantity'
import PriceCofee from './card-coffee/components/price'
import { Coffees } from '../types/coffees'
import ButtonRemove from './button-remove'
export default function CartCard({coffee}:{coffee:Coffees}) {
  return(
    <ContainerItem>
      <ImageCoffee 
      imgUrl={coffee.imageUrl} 
      heigthImg='4' 
      widthImg='4'/>
      <ContainerBtnRemoveWithInputAndName>
        <span>{coffee.name}</span>
        <ContainerBtnRemoveWithInput>
          <InputQuantity item={coffee} />
          <ButtonRemove/>
        </ContainerBtnRemoveWithInput>
      </ContainerBtnRemoveWithInputAndName>
      <PriceCofee/>
    </ContainerItem>
  )
}

const ContainerItem = styled.li`
width: 23rem;
height: 5rem;
display: flex;
align-items: flex-start;
justify-content: space-between;

`
const ContainerBtnRemoveWithInput = styled.div`
display: flex;
gap: 8px;
margin-top: auto;
`
const ContainerBtnRemoveWithInputAndName = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`