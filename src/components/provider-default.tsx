import { ReactNode } from 'react'
import { GlobalStyle } from '../styled/globalStyled'
import { Theme } from '../styled/themes/ligth'
import IconProvider from './icon-provider'
import CoffeeProvider from '../context/cart-context/cart-context'

export default function ProviderDefault({ children }: { children: ReactNode }) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <IconProvider>
          <CoffeeProvider>{children}</CoffeeProvider>
        </IconProvider>
      </Theme>
    </>
  )
}
