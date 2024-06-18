
import image from "./assets/phone.png"

function CartItem() {
  return (
    <>
      <div className="cart-item">
         
         <div className="cart-info">
            <img src={image} alt="" />
            <p>Samsung</p>
         </div>
         <div className="cart-quantity">
            <p>1</p>
            <span> X </span>
            <p>399.99</p>
         </div>
      </div>
    </>
  )
}

export default CartItem