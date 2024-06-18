import { useContext } from "react"
import { productContext } from "./App"

import Product from "./Product"

function Left() {

  const { products , setProducts } = useContext(productContext)

  function handleCartRemove(e, id){
    e.preventDefault()
    setProducts(products.filter((prdItem)=>{
       return prdItem.id !== id;
    }))
  }

  function handleDecrement(index){

    let copyCart = [...products];
    
     let count = copyCart[index]["cartCount"] 
  
     if(count > 0){
      copyCart[index]["cartCount"] -= 1;
     }
     setProducts(copyCart)

     if(count > 0 && count < 2){
      setProducts(products.filter((cartItem,idx)=>{
        return index !== idx;
      }))
    }
}

function handleIncrement(index){
  let copyCart = [...products];
  copyCart[index]["cartCount"] += 1;
  setProducts(copyCart)

}

  return (
   <>
     <div className="left">
       <h2>Product</h2>
       {products.map((dt,idx)=>{
        return <Product key={idx} image={dt.image} phoneName={dt.phoneName} price={dt.price} id={dt.id} cartCount={dt.cartCount} 
        handleCartRemove={handleCartRemove} handleDecrement={handleDecrement} handleIncrement={handleIncrement} index={idx}/>
     })}
     </div>
   </>
  )
}

export default Left