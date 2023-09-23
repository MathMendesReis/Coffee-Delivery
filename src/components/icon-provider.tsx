import { ReactNode } from 'react'
import { IconContext } from '@phosphor-icons/react'

export default function IconProvider({ children }: { children: ReactNode }) {
  return (
    <IconContext.Provider
      value={{
        size: 20,
        weight: 'fill',
        mirrored: false,
      }}
    >
      {children}
    </IconContext.Provider>
  )
}
