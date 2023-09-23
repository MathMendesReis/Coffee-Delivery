import styled from 'styled-components'

export default function BtnPayment() {
  return (
    <ButtonConfirmedPayment type="submit">
      <span>confirmar pagamento</span>
    </ButtonConfirmedPayment>
  )
}

const ButtonConfirmedPayment = styled.button`
  width: 23.125rem;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.colors.yellowDark};
  border: none;
  border-radius: 8px;
  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: ${({ theme }) => theme.fontFamily.bold2};
    font-weight: 700;
    line-height: 130%;
  }
`
