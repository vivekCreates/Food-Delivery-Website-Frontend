import React, { useEffect, useState } from "react";
import "./AmountToPayCard.css"; // Import the CSS file
import { useCart } from "../../contexts/CartContext";

const AmountToPayCard = () => {
  const [totalAmout, setTotalAmout] = useState(0);
  const {state} = useCart();

 useEffect(()=>{
   setTotalAmout(
     state?.cart.reduce((total,item)=>total + item.price * item.quantity,0)
   )
 },[state.cart])
  

  return (
    <div className="amount-card">
      <h2 className="header">Amount to Pay</h2>
      <div className="items-container">
        {/* Example of a food item */}
        {state?.cart.map((item) => (
          <div className="item" key={item._id}>
            <span>{item.name}</span>
            <span>
              ${item.price}x {item.quantity} = ${item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>
      <div className="total">
        <strong>Total:</strong>
        <span>${totalAmout}</span>
      </div>
      <button className="button">Pay Now</button>
    </div>
  );
};

export default AmountToPayCard;
