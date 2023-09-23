import styled from "styled-components"

export default function CartList() {
  return(
    <SubContainerCartList>
    <CartList/>
  </SubContainerCartList>
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