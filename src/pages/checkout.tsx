import { FormProvider,useForm } from "react-hook-form"
import styled from 'styled-components'
import Title from "../components/default-title"
import Top from "../components/top-form"
import { MapPin, CurrencyDollarSimple, Bank, CurrencyDollar, CreditCard } from "@phosphor-icons/react";
import CartList from "../components/cart-list";
import { formatPrice } from "../utils/format-price";
import useCart from "../hooks/useCart";

export default function Checkout() {
  const {stateCart} = useCart()
  const methods = useForm()
  return (
    <Provider {...methods}>
      <ContainerForm >
        <ContainerInputsWithPaymentMethod>
          <Title text="Complete seu pedido" fontSize="xl"/>
          <BoxInputs>
            <Top
            iconColor="yellowDark"
            icon={<MapPin/>}
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            />
            <ContainerInputs>
              <Input type="text"  widthInput={'200'} placeholder="CEP" />
              <Input type="text"  widthInput={'560'} placeholder="rua"/>
              <Label>
                <Input type="text"  widthInput={'200'} placeholder="numero" />
                <Input type="text"  widthInput={'348'} placeholder="complemento" />
              </Label>
              <Label>
                <Input type="text"  widthInput={'200'} placeholder="bairro" />
                <Input type="text"  widthInput={'278'} placeholder="cidade" />
                <Input type="text"  widthInput={'60'} placeholder="UF" />
              </Label>
            </ContainerInputs>
          </BoxInputs>
          <ContainerPaymentMethod>
          <Top
            iconColor="purpleDark"
            icon={<CurrencyDollarSimple weight="bold"/>}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />
            <ContainerPayment>
              <ButtonPayment type="button">
                <CreditCard weight="bold" />
                <span>cartao de credito</span>
              </ButtonPayment>
              <ButtonPayment type="button">
                <Bank weight="bold"/>
                <span>cartao de debito</span>
              </ButtonPayment>
              <ButtonPayment type="button">
                <CurrencyDollar weight="bold"/>
                <span>dinheiro</span>
              </ButtonPayment>
            </ContainerPayment>
          </ContainerPaymentMethod>
        </ContainerInputsWithPaymentMethod>
        <div>
        <Title text="Cafés selecionados" fontSize="xl"/>
        <ContainerCart>
          <SubContainerCartList>
            <CartList/>
          </SubContainerCartList>
          <ButtonConfirmedPayment>
            <span>confirmar pagamento</span>
          </ButtonConfirmedPayment>
          <ContainerTable>
            <tr>
              <td>Total items</td>
              <td>{formatPrice(stateCart.total)}</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>{formatPrice(350)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{formatPrice(stateCart.total + 350)}</td>
            </tr>
        </ContainerTable>
        </ContainerCart>
        </div>
      </ContainerForm>
    </Provider>
  )
}

const SubContainerCartList = styled.div`
  width: 25.125rem;
  height: 18.75rem;
  display: flex;
  flex-direction: column;
  gap: 17px;
  overflow-y: auto;
`

const ContainerPayment = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 35rem;
height: 3.1875rem;
`


const ButtonPayment = styled.button`
display: flex;
padding: 16px;
align-items: center;
justify-content: space-between;
gap: 8px;
border: none;

svg{
  color: ${({theme})=>theme.colors.purpleDark};
  
}

`
const Provider = styled(FormProvider)``
const ContainerInputsWithPaymentMethod = styled.div`
width: 40rem;
height: 39.875rem;
`
const ContainerForm = styled.form`
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-wrap: wrap;
gap: 12px;
`

const BaseLayout = styled.div`
background-color: ${({theme})=>theme.colors.baseCard};
display: flex;
padding: 40px;
flex-direction: column;
align-items: flex-start;
gap: 32px;
align-self: stretch;
margin-top: 15px;
`

const BoxInputs = styled(BaseLayout)`
height: 372px;
`
const ContainerCart = styled(BaseLayout)`
background-color: ${({theme})=>theme.colors.baseCard};
width: 28rem;
height: 31.125rem;
`
const ContainerPaymentMethod = styled(BaseLayout)`
background-color: ${({theme})=>theme.colors.baseCard};
height: 12.9375rem;
`
const BaseInput = styled.input`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 4px;border-radius: 4px;
  border: 1px solid var(--base-button, #E6E5E5);
  background: var(--base-input, #EDEDED);

  `


interface InputProps {
  widthInput: string
}

const ContainerInputs = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

const Label = styled.label`
display: flex;
gap: 12px;
`

const Input = styled(BaseInput)<InputProps>`
width: ${props => props.widthInput}px;
&::placeholder{
  text-transform: capitalize;
}
  
`

const ButtonConfirmedPayment = styled.button`
width: 23.125rem;
height: 3.125rem;
background-color: ${({theme})=>theme.colors.yellowDark};
border: none;
border-radius: 8px;
span{
  color:${({theme})=>theme.colors.white};
  font-size: ${({theme})=>theme.fontSize.lg};
  font-family: ${({theme})=>theme.fontFamily.bold2};
  font-weight: 700;
  line-height: 130%;
}
`

const ContainerTable = styled.table`
  display: flex;
  flex-direction: column;
  gap: 12px;

  tr {
    display: flex;
    align-items: flex;
    justify-content: space-between;
    width: 370px;

    td {
      width: 80px;
      color: var(--base-text, #574F4D);
      font-family: Roboto;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }

    &:last-child {
      td {
        font-weight: 700;
      }
    }
  }
`;