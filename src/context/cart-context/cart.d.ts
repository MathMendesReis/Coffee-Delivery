/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import { Coffees } from '../../types/coffees'

export interface coffeeContextProps {
  children: ReactNode
}

export interface CartItem extends Coffees {
  quantity: number
}

export interface InitialState {
  cartItems: CartItem[]
  itemCounter: number
  total: number
}
export interface Action {
  type: string
  payload?: any
  meta?: any
}
