import { ReactNode } from 'react'
import styled from 'styled-components'
type ColorsBg = 'yellowDark' | 'yellow' | 'baseText' | 'purpleDark'
export default function IconWithIcon({
  icon,
  text,
  colorBg,
}: {
  icon: ReactNode
  text: string
  colorBg: ColorsBg
}) {
  return (
    <Container>
      <Bgicon colorBg={colorBg}>{icon}</Bgicon>
      <Text>{text}</Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: 16.4375rem;
  height: 2rem;
`

interface BgInconProps {
  colorBg: ColorsBg
}
const Bgicon = styled.div<BgInconProps>`
  width: 28px;
  height: 28px;
  background-color: ${({ theme, colorBg }) => theme.colors[colorBg]};
  display: flex;
  align-items: center;
  flex-shrink: 1;
  justify-content: center;
  border-radius: 999px;
  padding: 5px;
  svg {
    color: white;
  }
`

const Text = styled.span`
  color: var(--base-text, #574f4d);
  /* Text/Regular M */
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
`
