

import React, { createContext, useEffect, useState } from 'react'
import Left from './Left'
import Right from './Right'
import "./App.css"


import {data} from "./data"



export const productContext = createContext()

function App() {

  const [products,setProducts] = useState(data);
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0)

  return (
    <>
    <productContext.Provider value={{ products, setProducts , cart , setCart , total , setTotal}}>
     <div className="wrapper">
       <Left />
       <Right />
     </div>
     </productContext.Provider>
    </>
  )
}

export default App