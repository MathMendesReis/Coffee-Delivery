import useCart from '../../hooks/useCart'
import { formatPrice } from '../../utils/format-price'
import styled from 'styled-components'

export default function TableWithInfo() {
  const { stateCart } = useCart()

  return (
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
  )
}

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
      color: var(--base-text, #574f4d);
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
`
