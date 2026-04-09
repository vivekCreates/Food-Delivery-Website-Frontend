import React, { useContext, useState } from "react";
import "./Card.css";
import { assets } from "../../assets/assets";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const { dispatch } = useCart();
  const navigate = useNavigate();
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  return (
    <div className="card" onClick={() => navigate(`/food/${data._id}`)}>
      <div className="card-img">
        <img src={data.image} alt="" />
        {!showQuantityModal ? (
          <img
            src={assets.add_icon_white}
            alt=""
            className="white-icon"
            onClick={(e) => {
              e.stopPropagation();
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
        <h3 className="price">{data.price}</h3>
      </div>
    </div>
  );
};

export default Card;
