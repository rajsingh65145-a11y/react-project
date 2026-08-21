
import React from 'react'
import About from './About'

import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Startpage from './Startpage'
import Quiz from './Quiz'


const App = () => {
  return (
    
      <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Startpage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Quiz' element={<Quiz/>}/>
      </Routes>
      </>
    
  )
}

export default App
