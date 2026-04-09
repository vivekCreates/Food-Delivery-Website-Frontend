import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import "./Cart.css";
import { assets, food_list } from "../../assets/assets";
import { useCart } from "../../contexts/CartContext";
import { CirclePlus, CircleMinus } from "lucide-react";
import AmountToPayCard from "../../components/Amount/AmountToPayCard";
const Cart = () => {
  const { state, dispatch } = useCart();
  console.log("cartItems", state.cart);
  return (
    <div className="cart-container">
      <Header />
      <div className="cart-items">
        {state.cart.length > 0 ? (
          <div className="cart-items-title">
            <h4>Items</h4>
            <h4>Title</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
            <h4>Remove</h4>
          </div>
        ) : (
          ""
        )}
        {state.cart.length > 0 ? (
          state.cart.map((item) => {
            return (
              <div className="cart-food-items" key={item._id}>
                <div className="food-img">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div className="quantity-box">
                  <CircleMinus
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_QUANTITY",
                        payload: { data: item },
                      })
                    }
                  />
                  <p>{item.quantity}</p>
                  <CirclePlus
                    onClick={() =>
                      dispatch({
                        type: "INCREASE_QUANTITY",
                        payload: { data: item },
                      })
                    }
                  />
                </div>
                <p>${item.price * item.quantity}</p>
                <p
                  className="cross"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_TO_CART",
                      payload: { data: item },
                    })
                  }
                >
                  x
                </p>
              </div>
            );
          })
        ) : (
          <h2 className="unavailable-items">No items added yet</h2>
        )}
        {state?.cart.length > 0 && <AmountToPayCard />}
      </div>
    </div>
  );
};

export default Cart;
