import { productsList } from "../data/data";
import CardCoffee from "./card-coffee/card-coffee";

export default function ListItens() {
  return productsList.map((coffee, index) => (
    <CardCoffee  key={index} item={coffee}/>
  ));
}
