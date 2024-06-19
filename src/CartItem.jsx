

function CartItem({item}) {
  return (
    <>
      <div className="cart-item">
         
         <div className="cart-info">
            <img src={item.image} alt="" />
            <p>{item.phoneName}</p>
         </div>
         <div className="cart-quantity">
            <p>{item.quantity}</p>
            <span> X </span>
            <p>{item.price}</p>
         </div>
      </div>
    </>
  )
}

export default CartItem