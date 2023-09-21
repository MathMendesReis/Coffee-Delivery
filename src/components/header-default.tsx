import styled from "styled-components";
import Logo from '../assets/react.svg'
import { MapPin,ShoppingCart } from "@phosphor-icons/react";


export default function HeaderDefault() {
  return ( 
    <NavBar>
      <LogoStyled src={Logo} alt="" />
      <ButtonMapPin>
        <MapPinStyled /> 
        <span>São Pedro da Aldeia - RJ</span>
        </ButtonMapPin>
      <ButtonCartShopping>
        <ShoppingCartStyled />
      </ButtonCartShopping>
    </NavBar>
  )
}

const NavBar = styled.header`
  min-height: 6.5rem;
  width: 100%;
  padding: 32px 0;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`

const BaseButton = styled.button`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
`
const ButtonMapPin = styled(BaseButton)`
span{
  font-size: 0.875rem;
  color: ${({theme})=>theme.colors.purpleDark};
}
`
const ButtonCartShopping = styled(BaseButton)``

const LogoStyled = styled.img`
width: 84.952px;
height: 40px;
flex-shrink: 0;
margin-right: auto;
`

const MapPinStyled = styled(MapPin)`
  width: 1.375rem;
  height: 1.375rem;
  color:${({theme})=>theme.colors.purpleDark};
`
const ShoppingCartStyled = styled(ShoppingCart)`
  width: 1.375rem;
  height: 1.375rem;
  color:${({theme})=>theme.colors.yellowDark};
`