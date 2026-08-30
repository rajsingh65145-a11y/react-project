import React,{ useState }  from 'react'
import Cartcontext from './Cartcontext';
import Product from './Product';
import Cart from './Cart';

const App = () => {



const [item, setitem] = useState([]);

const additem=(newItem)=>{
  setitem([...item,newItem])
}
return(
  <div>
    <Cartcontext.Provider value={{item,additem}}> 
           <Product/>
           <Cart/>
    </Cartcontext.Provider>
  </div>
)

  /*
  const [theme, settheme] = useState("light");
  return (
    <div>
      
      <ThemeContext.Provider  value={{theme,settheme}}>
<Display/>
<Toogle/>
      </ThemeContext.Provider>
    </div>
  )*/
}

export default App
