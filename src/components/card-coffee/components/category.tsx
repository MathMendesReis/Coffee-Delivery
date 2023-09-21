import styled from 'styled-components'

export default function CategoryCoffee({text}:{text:String}) {
  return (
    <Container>
      <span>{text}</span>
    </Container>
  )
}

const Container = styled.li`
display: flex;
padding: 4px 8px;
justify-content: center;
align-items: center;
border-radius: 100px;
background: ${({theme})=>theme.colors.yellowLigth};
span{
  color: ${({theme})=>theme.colors.yellowDark};

font-family: Roboto;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 13px */
text-transform: uppercase;
}
`