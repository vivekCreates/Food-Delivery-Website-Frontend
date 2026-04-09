import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const initialSate = {
  cart: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "INCREASE_QUANTITY":
      const updatedCartWithIncreasedQuantity = state.cart.some(
        (item) => item._id === action.payload.data._id
      )
        ? state.cart.map((food) =>
            food._id === action.payload.data._id
              ? { ...food, quantity: food.quantity + 1 }
              : food
          )
        : [...state.cart, { ...action.payload.data, quantity: 1 }];

      return {
        ...state,
        cart: updatedCartWithIncreasedQuantity,
      };
    case "DECREASE_QUANTITY":
      const updatedCartWithDecreasedQuantity =
        state.cart.some((item) => item._id === action.payload.data._id) &&
        state.cart.map((food) =>
          food._id === action.payload.data._id && food.quantity > 0
            ? { ...food, quantity: food.quantity - 1 }
            : food
        );

      return {
        ...state,
        cart: updatedCartWithDecreasedQuantity,
      };
      case "REMOVE_TO_CART":
        const filteredCart = state.cart.filter(food=>food._id !== action.payload.data._id)
        return {
            ...state,
            cart:filteredCart
        }
    default:
      break;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialSate);
  console.log("state: ", state);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
