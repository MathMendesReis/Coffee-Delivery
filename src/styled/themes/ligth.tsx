import { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`

export const theme: DefaultTheme = {
  colors: {
    yellowDark: '#C47F17',
    yellow: '#DBAC2C',
    yellowLigth: '#F1E9C9',
    purpleDark: '#4B2995',
    purple: '#8047F8',
    purpleLigth: '#EBE5F9',
    baseTitle: '#272221',
    baseSubtitle: '#403937',
    baseText: '#574f4d',
    baseLabel: '#8D8686',
    baseHover: '#D7D5D5',
    baseButton: '#E6E5E5',
    baseInput: '#EDEED',
    baseCard: '#F3F2F2',
    background: '#FAFAFA',
    white: '#FFFFFF',
    warnig: '#B33A3A',
  },
  mediaQuerys: {
    desktop: '1600px',
    notbook: '1440px',
    table: '768px',
    mobile: '320px',
  },
  fontFamily: {
    roboto: ['Roboto', 'sans-serif'].join(','),
    bold2: ['Roboto Bold', 'sans-serif'].join(','),
    heading: ['IBM Plex Sans', 'sans-serif'].join(','),
    sans: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    mono: ['IBM Plex Mono', 'serif'].join(','),
  },
  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    '2xl': rem(24),
    '3xl': rem(32),
    '4xl': rem(48),
    '5xl': rem(64),
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}