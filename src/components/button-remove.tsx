import { Trash } from '@phosphor-icons/react'
import styled from 'styled-components'
export default function ButtonRemove() {
  return (
  <ButtonStyled
  type='button'
  >
    <Trash weight='bold' />
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
background: var(--base-button, #E6E5E5);
border: none;
height:2.4375rem;
svg{
  color: ${({theme})=>theme.colors.purpleDark};
}
`