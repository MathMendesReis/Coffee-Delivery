import CategoryCoffee from './category'
import { Coffees } from '../../../types/coffees'

export default function ListCategory({item}:{item:Coffees}) {
  return item.category.map((category, index) => (
    <CategoryCoffee  key={index} text={category}/>
  ));
}
