import React from 'react'

const Pricecard = ({price,discount}) => {
    const finalprice=price-(price*discount)/100
  return (
    <div>
       <p>Final Price: {finalprice}</p>
    </div>
  )
}

export default Pricecard
