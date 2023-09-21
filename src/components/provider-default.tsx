import { ReactNode } from "react";
import { GlobalStyle } from "../styled/globalStyled";
import { Theme } from "../styled/themes/ligth";
import IconProvider from "./icon-provider";


export default function ProviderDefault({children}:{children:ReactNode}) {
  return (
  <>
    <Theme>
      <GlobalStyle/>
      <IconProvider>
      {children}
      </IconProvider>
    </Theme>
  </>
  )
}