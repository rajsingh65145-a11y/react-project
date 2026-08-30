import React from 'react'
import useTheme from './useTheme'

const Display = () => {
   const { theme } = useTheme();   // sirf ek import, seedha call
   return (
     <div>
       <p>hello, {theme}</p>
     </div>
   )
}

export default Display