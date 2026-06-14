import react from 'react'
import Card from './components/Card'

const App =()=>{
   
    return(
        <div>
            <Card/> 
            
        </div>

    )

}
export default  App


// use of {}  -> this thing in react //

import react from 'react'


const App=()=>{
    const user='harsh'
    const age=20
    return(
        <div>
        
        <h1>hello ,guys i am {user}</h1>  // to print hoga = harsh 
         <h2> and i am {age} years old</h2>                                 // agar sirf user likha ho to print hoga=hello guys i am user//
          
        </div>                            // variable ko print karwane ke liye hi {} use kiya jkata hai//
        
    )
    
}
export default  App
