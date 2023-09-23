import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      yellowDark: string
      yellow: string
      yellowLigth: string
      purpleDark: string
      purple: string
      purpleLigth: string
      baseTitle: string
      baseSubtitle: string
      baseText: string
      baseLabel: string
      baseHover: string
      baseButton: string
      baseInput: string
      baseCard: string
      background: string
      white: string
      warnig: string
    }
    mediaQuerys: {
      desktop: string
      notbook: string
      table: string
      mobile: string
    }
    fontFamily: {
      roboto: string
      bold2: string
      heading: string
      sans: string
      mono: string
    }
    fontSize: {
      xs: string
      sm: string
      md: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
    }
  }
}
