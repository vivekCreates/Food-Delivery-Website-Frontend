import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./Header.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const [menu, setMenu] = useState("Home");
  const { state } = useCart();
  const handleAnimation = (e) => {
    setMenu(e.target.innerText);
    console.log(menu);
  };
  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <img src={assets.logo} alt="" />
        </Link>
      </div>
      <ul>
        <li
          className={menu === "Home" ? "underline" : ""}
          onClick={handleAnimation}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={menu === "Menu" ? "underline" : ""}
          onClick={handleAnimation}
        >
          <Link
            to="menu"
            smooth={true}
            duration={500}
            style={{ margin: "10px", cursor: "pointer" }}
          >
            Menu
          </Link>
        </li>
        <li
          className={menu === "Mobile app" ? "underline" : ""}
          onClick={handleAnimation}
        >
          <Link to="mobile-app"
            smooth={true}
            duration={500}
            style={{ margin: "10px", cursor: "pointer" }}>
            Mobile app
            </Link>
        </li>
        <li
          className={menu === "Contact us" ? "underline" : ""}
          onClick={handleAnimation}
        >
            <Link to="contact-us"
            smooth={true}
            duration={500}
            style={{ margin: "10px", cursor: "pointer" }}>
            Contact us
            </Link>
        </li>
      </ul>
      <div className="icons">
        <Link>
          <img src={assets.search_icon} alt="cart" />
        </Link>
        <Link to="/cart">
          {" "}
          <img src={assets.basket_icon} alt="" />
        </Link>

        {state.cart.length > 0 && <div className="dot"></div>}

        <Link to={"/login"}>Sign in</Link>
      </div>
    </nav>
  );
};

export default Header;
