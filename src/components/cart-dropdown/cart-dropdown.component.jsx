import Button from '../button/button.component'
import './cart-dropdown.style.jsx'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.style.jsx'


const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => 
        <CartItem key={item.id} cartItem={item}/>)) : 

          <EmptyMessage>YOur Cart is empty</EmptyMessage>
        }

        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </CartItems>
    </CartDropdownContainer>
  )
}

export default CartDropdown