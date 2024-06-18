

import React, { createContext, useState } from 'react'
import Left from './Left'
import Right from './Right'
import "./App.css"


import {data} from "./data"



export const productContext = createContext()

function App() {

  const [products,setProducts] = useState(data);

  return (
    <>
    <productContext.Provider value={{ products, setProducts}}>
     <div className="wrapper">
       <Left />
       <Right />
     </div>
     </productContext.Provider>
    </>
  )
}

export default App