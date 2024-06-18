

import React from 'react'
import CartItem from "./CartItem"

function Right() {
  return (
   <>
    <div className="right">
    <h2>Cart</h2>
     
     <div className="cart-container">
      <div className="carts">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      </div>
      
      <div className="total-container">
        <p>Total : </p>
        <p>5000 $ </p>
      </div>
     </div>


    </div>
   </>
  )
}

export default Right