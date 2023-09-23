import useCart from '../hooks/useCart'
import CartCard from './cart-card'

export default function CartList() {
  const { stateCart } = useCart()
  return stateCart.cartItems.map((item) => (
    <CartCard key={item.id} coffee={item} />
  ))
}
