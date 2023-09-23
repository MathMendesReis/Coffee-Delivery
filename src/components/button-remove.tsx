import { Trash } from '@phosphor-icons/react'
import styled from 'styled-components'
import useCart from '../hooks/useCart'
import { removeAllProds } from '../context/cart-context/cart-reducer'
import { Coffees } from '../types/coffees'
export default function ButtonRemove({ item }: { item: Coffees }) {
  const { dispatch } = useCart()
  return (
    <ButtonStyled
      type="button"
      onClick={() => {
        removeAllProds(item, dispatch)
      }}
    >
      <Trash weight="bold" />
      <span>remover</span>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  display: flex;
  height: 2rem;
  padding: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.375rem;
  background: var(--base-button, #e6e5e5);
  border: none;
  height: 2.4375rem;
  svg {
    color: ${({ theme }) => theme.colors.purpleDark};
  }
`
