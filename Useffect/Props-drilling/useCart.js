import React, { useContext } from 'react'
import Cartcontext from './Cartcontext'

const useCart = () => {
  return useContext(Cartcontext)
}

export default useCart
