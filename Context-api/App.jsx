import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [Theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar Theme={Theme}/>
    </div>
  )
}

export default App
