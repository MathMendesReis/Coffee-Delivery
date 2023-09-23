import styled from "styled-components"
export const BaseLayout = styled.div`
background-color: ${({theme})=>theme.colors.baseCard};
display: flex;
padding: 40px;
flex-direction: column;
align-items: flex-start;
gap: 32px;
align-self: stretch;
margin-top: 15px;
`