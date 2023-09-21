import { useContext } from "react";
import { coffeeContext } from "../context/cart-context/cart-context";

export default function useCart() {
  return useContext(coffeeContext)
}