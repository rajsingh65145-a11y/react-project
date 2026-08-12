import React, { useContext } from 'react'

const Nav2 = (props) => {
 const data = useContext(Postdatacontext)
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h4>      {props.Theme}
</h4>
    </div>
  )
}

export default Nav2
