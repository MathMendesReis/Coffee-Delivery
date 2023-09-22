import { formatPrice } from "../../../utils/format-price";
import styled from 'styled-components'

export default function PriceCofee() {
  return <SpanStyled>{formatPrice(990)}</SpanStyled>
}

const SpanStyled = styled.span`
color: ${({theme})=>theme.colors.baseText};
text-align: right;

/* Text/Bold M */
font-family: Roboto;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 1.3rem */
`