/* eslint-disable no-case-declarations */
import { Dispatch } from 'react'
import { Coffees } from '../../types/coffees'
import {
  ActionsType,
  addNewProdAction,
  quantityProdAction,
  removeProdAction,
} from './actions'
import { Action, CartItem, InitialState } from './cart'

export const cartReducer = (state: InitialState, action: Action) => {
  const { payload, type } = action
  const isExisting = prodInCart(state, payload.id)
  switch (type) {
    case ActionsType.ADD_PROD:
      if (!isExisting) {
        const newItem = { ...payload, quantity: 1 }
        const updatedCartItems = [...state.cartItems, newItem]
        const total = calculateTotal(updatedCartItems)

        return {
          ...state,
          cartItems: updatedCartItems,
          itemCounter: updatedCartItems.length,
          total,
        }
      } else {
        const updatedCartItems = updateCart(state.cartItems, action, 'plus')
        const total = calculateTotal(updatedCartItems)

        return {
          ...state,
          cartItems: updatedCartItems,
          itemCounter: updatedCartItems.length,
          total,
        }
      }
    case ActionsType.QUANTITY:
      if (isExisting && isExisting.quantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== isExisting.id,
        )
        const total = calculateTotal(updatedCartItems)

        return {
          ...state,
          cartItems: updatedCartItems,
          itemCounter: updatedCartItems.length,
          total,
        }
      } else {
        const updatedCartItems = updateCart(state.cartItems, action, 'minus')
        const total = calculateTotal(updatedCartItems)

        return {
          ...state,
          cartItems: updatedCartItems,
          itemCounter: updatedCartItems.length,
          total,
        }
      }
    case ActionsType.REMOVE_PROD:
      const updateCartFilter = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      )
      const total = calculateTotal(updateCartFilter)
      return {
        ...state,
        cartItems: updateCartFilter,
        itemCounter: updateCartFilter.length,
        total,
      }

    default:
      return state
  }
}
export function addProdInCart(item: Coffees, dispacth: Dispatch<Action>) {
  dispacth(addNewProdAction(item))
}

export const calculateTotal = (value: CartItem[]): number => {
  const subtotal = value.reduce(
    (sum, item) => (sum += item.price * item.quantity),
    0,
  )
  const deliveryFee = 3.5
  const total = subtotal + deliveryFee
  return total
}
export function prodInCart({ cartItems }: InitialState, id: string) {
  const found = cartItems.find((element) => element.id === id)

  return found
}

export function quantityProdCart(item: Coffees, dispacth: Dispatch<Action>) {
  dispacth(quantityProdAction(item))
}
export function removeAllProds(item: Coffees, dispacth: Dispatch<Action>) {
  dispacth(removeProdAction(item))
}

type Signal = 'plus' | 'minus'
export const updateCart = (
  value: CartItem[],
  action: Action,
  operation: Signal,
): CartItem[] => {
  const { payload } = action

  return value.map((item) =>
    item.id === payload.id
      ? {
          ...item,
          quantity:
            operation === 'plus' ? item.quantity + 1 : item.quantity - 1,
        }
      : item,
  )
}
