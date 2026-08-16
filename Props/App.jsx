import React from 'react'

import Profilecard from './Profilecard'

const App = () => {
  const Users=[
    {name:"Harsh",age:21},
    {name:"Sarthak",age:21}
  ];
  return (
    <div>
      
      {Users.map(function(user,index){
        return <Profilecard key={index} name={user.name} age={user.age} city="Jaipur"/>
      })}
    </div>
  )
}

export default App
