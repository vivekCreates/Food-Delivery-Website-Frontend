import React, { useContext, useState } from "react";
import "./Card.css";
import { assets } from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";

const Card = ({ data, onClick }) => {
  const { state, dispatch } = useCart();
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  return (
    <div className="card">
      <div className="card-img">
        <img src={data.image} alt="" />
        {!showQuantityModal ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className="white-icon"
            onClick={() => {
              setShowQuantityModal(true);
              dispatch({ type: "ADD_TO_CART", payload: data });
            }}
          />
        ) : (
          <div className="added">
            <p className="add-text">Added</p>
            </div>
        )}
      </div>
      <div className="all-info">
        <div className="card-info">
          <h3>{data.name}</h3>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </div>
        <p>{data.description}</p>
        <h3 className="price">${data.price}</h3>
      </div>
    </div>
  );
};

export default Card;
