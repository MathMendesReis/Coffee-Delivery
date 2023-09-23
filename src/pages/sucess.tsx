import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react";
import styled from "styled-components";
import ilustration from '../assets/Illustration.svg'
type TColorBackground = 'purpleDark'|'yellowDark'|'yellow'
export default function Sucess() {
  return (
    <div>
      <ContainerPhrase>
        <TagH1>Uhuul, pedido confirmado</TagH1>
        <TagP>Agora é só aguardar que logo o café chegará até você</TagP>
      </ContainerPhrase>
      <ContainerMan>
        <ContainerInfos>
          <Info 
          colorBackground="purpleDark"
          >
            <div>
              <MapPin/>
            </div>
            <p>Entrega em Rua João Daniel Martinelli, 102 <br /> Farrapos - Porto Alegre, RS</p>
          </Info>
          <Info 
          colorBackground="yellow"
          >
            <div>
              <Clock/>
            </div>
            <p>Previsão de entrega <br /> 20 min - 30 min </p>
          </Info>
          <Info 
          colorBackground="yellowDark"
          >
            <div>
              <CurrencyDollar/>
            </div>
            <p>Pagamento na entrega <br /> Cartão de Crédito</p>
          </Info>
        </ContainerInfos>
        <img src={ilustration} alt="" />
      </ContainerMan>
    </div>
  );
}

const ContainerMan = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 3.125rem;
`

const ContainerPhrase = styled.section`
display: flex;
flex-direction: column;
gap: 12px;
width: 87.5rem;
justify-content: flex-start;
margin-top: 4rem;
`

const TagH1 = styled.h1`
color: ${({theme})=>theme.colors.yellowDark};
font-family: ${({theme})=>theme.fontFamily.bold2};
font-size: 2rem;
font-style: normal;
font-weight: 800;
line-height: 130%; 

`
const TagP = styled.h1`
  color: ${({theme})=>theme.colors.baseText};
  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; 

`

const ContainerInfos = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
border: 2px solid ${({theme})=>theme.colors.yellowDark};
border-radius: 6px 36px;
width: 32.875rem;
height: 15.625rem;
padding: 40px;
`

interface Info {
  colorBackground: TColorBackground
}
const Info = styled.div<Info>`
display:flex;
gap: 15px;
>div{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: ${({theme,colorBackground})=>theme.colors[colorBackground]};
  svg{
    color:white;
  }
}
`