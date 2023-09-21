import styled from 'styled-components'
import {Plus, Minus  } from "@phosphor-icons/react";
import { Coffees } from '../../../types/coffees';
import useCart from '../../../hooks/useCart';
import { addProdInCart, removeProdCart } from '../../../context/cart-context/cart-reducer';
import { MouseEventHandler } from 'react';

export default function InputQuantity({item}:{item:Coffees}) {
  const {stateCart,dispatch} = useCart()
  const found = stateCart.cartItems.find((element) => element.id === item.id)
  const quantity = found? found.quantity: 0

  const handleAddProdIncart: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    addProdInCart(item, dispatch);
  };
   const handleRmvProdIncart: MouseEventHandler<HTMLButtonElement> | undefined = ()=>{
     removeProdCart(item, dispatch) }
  return (
    <Container>
      <ButtonPlus
      onClick={handleAddProdIncart}
      
      >
        <Plus weight='bold'/>
      </ButtonPlus>
      <Span>{quantity}</Span>
      <ButtonMinus
      onClick={handleRmvProdIncart}
      >
        <Minus weight='bold'/>
      </ButtonMinus>
    </Container>
  )
}
const Container = styled.div`
display: flex;
height: 38px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 6px;
background: var(--base-button, #E6E5E5);
width: 72px;
`

const Span = styled.span`
  
  color: var(--base-title, #272221);
text-align: center;

/* Text/Regular M */
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 20.8px */
width: 20px;
`

const BaseButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
height: 100%;
background-color: transparent;
border: none;
svg{
  color:${({theme})=>theme.colors.purpleDark};
  width: 14px;
  height: 14px;
}
`

const ButtonPlus = styled(BaseButton)``
const ButtonMinus = styled(BaseButton)``