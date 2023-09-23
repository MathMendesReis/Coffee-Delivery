import {Bank, CurrencyDollar, CreditCard } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import styled from 'styled-components'
import { PaymentMethods, ValidationSchemma } from "./form/validation";

export default function PaymentMethodsTSX() {
  const {register, formState:{errors}, setValue} = useFormContext<ValidationSchemma>()

  const handlePaymentMethodChange = (paymentMethod:PaymentMethods) => {
    setValue("paymentMethod", paymentMethod);
  };
  return(
    <ContainerPayment>
      <ButtonPayment 
      onClick={() => handlePaymentMethodChange(PaymentMethods.credit)}
      type="button">
        <CreditCard weight="bold" />
        <span>cartao de credito</span>
      </ButtonPayment>
      <ButtonPayment 
      onClick={() => handlePaymentMethodChange(PaymentMethods.credit)}
      type="button">
        <Bank weight="bold"/>
        <span>cartao de debito</span>
      </ButtonPayment>
      <ButtonPayment 
      onClick={() => handlePaymentMethodChange(PaymentMethods.credit)}
      type="button">
        <CurrencyDollar weight="bold"/>
        <span>dinheiro</span>
      </ButtonPayment>
  </ContainerPayment>
  )
}
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