import styled from 'styled-components'
import Title from '../default-title'
import Top from '../top-form'
import { BaseLayout } from './base-layout'
import PaymentMethods from './payment-method'
import { CurrencyDollarSimple, MapPin } from '@phosphor-icons/react'
import Inputs from './inputs'
export default function InputWithPaymentMethod() {
  return (
    <ContainerInputsWithPaymentMethod>
      <Title text="Complete seu pedido" fontSize="xl" />
      <BoxInputs>
        <Top
          iconColor="yellowDark"
          icon={<MapPin />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <Inputs />
      </BoxInputs>
      <ContainerPaymentMethod>
        <Top
          iconColor="purpleDark"
          icon={<CurrencyDollarSimple weight="bold" />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <PaymentMethods />
      </ContainerPaymentMethod>
    </ContainerInputsWithPaymentMethod>
  )
}

const BoxInputs = styled(BaseLayout)`
  height: 372px;
`
const ContainerPaymentMethod = styled(BaseLayout)`
  background-color: ${({ theme }) => theme.colors.baseCard};
  height: 12.9375rem;
`

const ContainerInputsWithPaymentMethod = styled.div`
  width: 40rem;
  height: 39.875rem;
`
