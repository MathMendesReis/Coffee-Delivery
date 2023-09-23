import { FormProvider, useForm } from 'react-hook-form'
import styled from 'styled-components'
import Title from '../components/default-title'
import CartList from '../components/cart-list'
import {
  ValidationSchemma,
  validationSchemma,
} from '../components/checkoutPage/form/validation'
import TableWithInfo from '../components/checkoutPage/table-info'
import InputWithPaymentMethod from '../components/checkoutPage/input-with-payment-methods'
import BtnPayment from '../components/checkoutPage/button-confirmed-payment'
import { BaseLayout } from '../components/checkoutPage/base-layout'
import useCart from '../hooks/useCart'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const methods = useForm<ValidationSchemma>({
    resolver: zodResolver(validationSchemma),
  })
  const navigate = useNavigate()

  const onSubmit = (data: ValidationSchemma) => {
    if (methods.formState.isValid) {
      navigate('/sucess', { state: { data } })
    }
  }
  const { stateCart } = useCart()

  return (
    <Provider {...methods}>
      <ContainerForm onSubmit={methods.handleSubmit(onSubmit)}>
        <InputWithPaymentMethod />
        <div>
          <Title text="Cafés selecionados" fontSize="xl" />
          <ContainerCart>
            {stateCart.cartItems.length === 0 ? (
              <EmptyCart>
                <h1>carrinho vazio</h1>
              </EmptyCart>
            ) : (
              <CartList />
            )}
            <BtnPayment />
            <TableWithInfo />
          </ContainerCart>
        </div>
      </ContainerForm>
    </Provider>
  )
}

const EmptyCart = styled.div`
  min-height: 12.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Provider = styled(FormProvider)``
const ContainerForm = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`

const ContainerCart = styled(BaseLayout)`
  background-color: ${({ theme }) => theme.colors.baseCard};
  width: 28rem;
  height: 31.125rem;
`
