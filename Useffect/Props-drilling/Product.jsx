import React from 'react'
import useCart from './useCart'

const Product = () => {
  const {additem}=useCart();
  return (
    <div>
      <button onClick={()=>additem({name:"shirt",price:500})}>Add to cart</button>
    </div>
  )
}

export default Product
