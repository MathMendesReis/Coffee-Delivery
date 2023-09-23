import styled from 'styled-components'
import IconWithIcon from './icon-with-info'
import { ShoppingCart } from '@phosphor-icons/react'

export default function ListIconWithInfo() {
  return (
    <ContainerInfoWithIcon>
      <IconWithIcon
        text="Compras simples e seguras"
        icon={<ShoppingCart />}
        colorBg="yellowDark"
      />
      <IconWithIcon
        text="Embalagem mantem o café intacto"
        icon={<ShoppingCart />}
        colorBg="baseText"
      />
      <IconWithIcon
        text="Entrega rapida e rastreada"
        icon={<ShoppingCart />}
        colorBg="yellow"
      />
      <IconWithIcon
        text="O café chega fresquinho até você"
        icon={<ShoppingCart />}
        colorBg="purpleDark"
      />
    </ContainerInfoWithIcon>
  )
}

const ContainerInfoWithIcon = styled.div`
  width: 35.4375rem;
  height: 5.25rem;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`
