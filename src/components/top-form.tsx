import { ReactNode } from "react";
import styled from 'styled-components'

type IconColor = 'yellowDark'|'purpleDark'
export default function Top({
  icon,
  title,
  subtitle,
  iconColor
}:{
    icon:ReactNode 
    title:string
    subtitle:string
    iconColor:IconColor
}) {
  return(
    <Container 
    iconColor={iconColor}
    >
      <div>{icon}</div>
      <ContainerTexts>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerTexts>
    </Container>
  )
}

interface ContainerProps {
  iconColor:IconColor
}
const Container = styled.div<ContainerProps>`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 8px;
svg{
  color: ${({theme,iconColor})=>theme.colors[iconColor]};
}
`

const ContainerTexts = styled.div``

const Title = styled.h1`
color: ${({theme})=>theme.colors.baseSubtitle};

font-family: Roboto;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 130%;`

const Subtitle = styled.p`
  
color: ${({theme})=>theme.colors.baseText};

font-family: Roboto;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 130%;
`