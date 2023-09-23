import styled from 'styled-components'
type fontSize = '4xl' | '3xl' | 'xl'
export default function Title({
  text = 'insira um title',
  fontSize = '4xl',
}: {
  text: string
  fontSize: fontSize
}) {
  return <Styled fontSize={fontSize}>{text}</Styled>
}

interface StyledProps {
  fontSize: fontSize
}
const Styled = styled.h1<StyledProps>`
  color: ${({ theme }) => theme.colors.baseTitle};
  font-family: ${({ theme }) => theme.fontFamily.bold2};
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`
