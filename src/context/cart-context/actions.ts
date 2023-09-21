import { Coffees } from "../../types/coffees"

export enum ActionsType {
  ADD_PROD = 'ADD_PROD',
  REMOVE_PROD = 'REMOVE_PROD',
  INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
}

export type ActionsTypeT = typeof ActionsType

export function addNewProdAction(item: Coffees) {
  return {
    type: ActionsType.ADD_PROD,
    payload: item,
  }
}
export function removeProdAction(item: Coffees) {
  return {
    type: ActionsType.REMOVE_PROD,
    payload: item,
  }
}
