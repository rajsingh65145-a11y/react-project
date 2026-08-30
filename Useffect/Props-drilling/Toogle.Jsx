import React from 'react'
import useTheme from './useTheme';

const Toogle = () => {
  const {theme,settheme}= useTheme(); 
  const handleToggle=()=>{
    settheme(theme=="light"?"dark":"light");
  }
  return (
    <div>
      <button onClick={handleToggle}>Toogle Theme</button>
    </div>
  )
}

export default Toogle
