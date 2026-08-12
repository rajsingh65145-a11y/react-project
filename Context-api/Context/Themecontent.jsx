import { createContext } from "react"

export const Postdatacontext=createContext()


const Themecontext = (props) => {
  return (
    <div>
        <Postdatacontext.Provider value={'hello'}>
            {props.children}
        </Postdatacontext.Provider>
    </div>
    
  )
}

export default Themecontext
