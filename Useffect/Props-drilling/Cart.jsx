import React from 'react'
import useCart from './useCart'

const Cart = () => {
    const {item}=useCart();
  return (
    <div>
      <p>Cart({item.length}items)</p>
    </div>
  )
}

export default Cart
