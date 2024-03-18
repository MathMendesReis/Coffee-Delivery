import styled from 'styled-components'
import Logo from '../assets/react.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'

export default function HeaderDefault() {
  const navigate = useNavigate()
  const handlePageCart = () => {
    navigate('/checkout')
  }
  const { stateCart } = useCart()
  return (
    <NavBar>
      <LinkHomePag to="/">
        <LogoStyled src={Logo} alt="" />
      </LinkHomePag>
      <ButtonMapPin>
        <MapPinStyled />
        <span>São Pedro da Aldeia - RJ</span>
      </ButtonMapPin>
      <ButtonCartShopping onClick={handlePageCart}>
        <ShoppingCartStyled />
      </ButtonCartShopping>
      <LengthCart>
        <span>{stateCart.itemCounter}</span>
      </LengthCart>
    </NavBar>
  )
}
const LengthCart = styled.div`
  background-color: ${({ theme }) => theme.colors.yellowDark};
  width: 1.5625rem;
  height: 1.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  margin-left: -20px;
  &:active {
    transform: scale(0.8);
  }
  span {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 800;
    font-size: 0.875rem;
  }
`
const NavBar = styled.header`
  min-height: 6.5rem;
  width: 100%;
  max-width: 1440px;
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
  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.purpleDark};
  }
`
const ButtonCartShopping = styled(BaseButton)``

const LogoStyled = styled.img`
  width: 84.952px;
  height: 40px;
  flex-shrink: 0;
`

const MapPinStyled = styled(MapPin)`
  width: 1.375rem;
  height: 1.375rem;
  color: ${({ theme }) => theme.colors.purpleDark};
`
const ShoppingCartStyled = styled(ShoppingCart)`
  width: 1.375rem;
  height: 1.375rem;
  color: ${({ theme }) => theme.colors.yellowDark};
`
const LinkHomePag = styled(Link)`
  margin-right: auto;
`
