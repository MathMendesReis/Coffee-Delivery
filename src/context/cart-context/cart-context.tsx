import { Dispatch, createContext, useReducer } from 'react'
import { Action, InitialState, coffeeContextProps } from './cart'
import { cartReducer } from './cart-reducer'

interface coffeeContext {
  dispatch: Dispatch<Action>
  stateCart: InitialState
}

export const coffeeContext = createContext({} as coffeeContext)

const initialState: InitialState = {
  cartItems: [],
  itemCounter: 0,
  total: 0,
}

export default function CoffeeProvider({ children }: coffeeContextProps) {
  const [stateCart, dispatch] = useReducer(cartReducer, initialState)
  return (
    <coffeeContext.Provider
      value={{
        dispatch,
        stateCart,
      }}
    >
      {children}
    </coffeeContext.Provider>
  )
}
