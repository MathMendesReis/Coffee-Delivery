import { productsList } from '../data/data'
import CardCoffee from './card-coffee/card-coffee'

export default function ListItens() {
  return productsList.map((coffee) => (
    <CardCoffee key={coffee.id} item={coffee} />
  ))
}
