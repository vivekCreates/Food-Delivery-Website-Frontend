import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaStar } from "react-icons/fa";
import { food_list } from "../../assets/assets";
import { useCart } from "../../contexts/CartContext";
import { Bike, Clock3, Flame, Leaf, ShieldCheck } from "lucide-react";
import "./FoodDetail.css";

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);

  const foodItem = food_list.find((item) => item._id === id);
  const relatedItems = useMemo(() => {
    if (!foodItem) return [];
    return food_list
      .filter((item) => item.category === foodItem.category && item._id !== foodItem._id)
      .slice(0, 4);
  }, [foodItem]);

  const inCartCount = state.cart
    .filter((item) => item._id === id)
    .reduce((total, item) => total + (item.quantity || 1), 0);

  const handleAddToCart = () => {
    for (let count = 0; count < quantity; count += 1) {
      dispatch({ type: "INCREASE_QUANTITY", payload: { data: foodItem } });
    }
  };

  if (!foodItem) {
    return (
      <>
        <section className="food-detail-container">
          <Header />
          <div className="food-not-found">
            <h2>Food item not found</h2>
            <button className="btn" onClick={() => navigate("/")}>
              Back to menu
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="food-detail-container">
        <Header />
        <div className="food-detail-breadcrumb">
          <button onClick={() => navigate("/")}>Home</button>
          <span>/</span>
          <button onClick={() => navigate("/")}>Menu</button>
          <span>/</span>
          <p>{foodItem.name}</p>
        </div>

        <div className="food-detail-card">
          <div className="food-detail-image">
            <img src={foodItem.image} alt={foodItem.name} />
            <span className="offer-tag">20% OFF up to Rs 60</span>
          </div>

          <div className="food-detail-content">
            <p className="food-category-tag">{foodItem.category}</p>
            <h1>{foodItem.name}</h1>

            <div className="food-rating">
              <FaStar className="star filled" />
              <FaStar className="star filled" />
              <FaStar className="star filled" />
              <FaStar className="star filled" />
              <FaStar className="star" />
              <span>4.2 (248 ratings)</span>
            </div>

            <p className="food-description">
              Freshly prepared with premium ingredients, this dish is balanced for
              flavor, texture, and satisfying portions. Perfect for lunch, dinner,
              or a late-evening craving.
            </p>

            <div className="meta-grid">
              <div className="meta-item">
                <Clock3 size={16} />
                <div>
                  <p>Delivery time</p>
                  <h4>25-35 mins</h4>
                </div>
              </div>
              <div className="meta-item">
                <Bike size={16} />
                <div>
                  <p>Delivery fee</p>
                  <h4>Rs 30</h4>
                </div>
              </div>
              <div className="meta-item">
                <Flame size={16} />
                <div>
                  <p>Calories</p>
                  <h4>420 kcal</h4>
                </div>
              </div>
              <div className="meta-item">
                <Leaf size={16} />
                <div>
                  <p>Freshness</p>
                  <h4>Same-day prep</h4>
                </div>
              </div>
            </div>

            <div className="trust-strip">
              <ShieldCheck size={16} />
              <p>Hygiene checked partner kitchen and tamper-proof packaging.</p>
            </div>

            <h2 className="food-price">Rs {foodItem.price}</h2>

            <div className="food-detail-actions">
              <div className="quantity-control">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="btn"
                onClick={handleAddToCart}
              >
                Add {quantity} to cart
              </button>
              <button className="btn secondary-btn" onClick={() => navigate("/cart")}>
                Go to cart
              </button>
            </div>
            {inCartCount > 0 && <p className="cart-count">Already in cart: {inCartCount}</p>}
          </div>
        </div>

        <div className="related-section">
          <div className="related-head">
            <h3>More from {foodItem.category}</h3>
            <button onClick={() => navigate("/")}>View all</button>
          </div>
          <div className="related-grid">
            {relatedItems.map((item) => (
              <button
                key={item._id}
                className="related-card"
                onClick={() => navigate(`/food/${item._id}`)}
              >
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Rs {item.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FoodDetail;
