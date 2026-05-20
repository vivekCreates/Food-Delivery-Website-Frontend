import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Header.css";
import { assets } from "../../assets/assets";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const [menu, setMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();

  const handleMenuSelection = (menuName) => {
    setMenu(menuName);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <RouterLink to="/">
          <img src={assets.logo} alt="Tomato logo" />
        </RouterLink>
      </div>

      {/* Mobile-first navbar toggle for small screens */}
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Collapsible menu keeps existing navigation behavior intact */}
      <ul className={isMobileMenuOpen ? "nav-links open" : "nav-links"}>
        <li className={menu === "Home" ? "underline" : ""}>
          <RouterLink to="/" onClick={() => handleMenuSelection("Home")}>
            Home
          </RouterLink>
        </li>
        <li className={menu === "Menu" ? "underline" : ""}>
          <ScrollLink
            to="menu"
            smooth={true}
            duration={500}
            onClick={() => handleMenuSelection("Menu")}
          >
            Menu
          </ScrollLink>
        </li>
        <li className={menu === "Mobile app" ? "underline" : ""}>
          <ScrollLink
            to="mobile-app"
            smooth={true}
            duration={500}
            onClick={() => handleMenuSelection("Mobile app")}
          >
            Mobile app
          </ScrollLink>
        </li>
        <li className={menu === "Contact us" ? "underline" : ""}>
          <ScrollLink
            to="contact-us"
            smooth={true}
            duration={500}
            onClick={() => handleMenuSelection("Contact us")}
          >
            Contact us
          </ScrollLink>
        </li>
      </ul>
      <div className="icons">
        <RouterLink to="/">
          <img src={assets.search_icon} alt="cart" />
        </RouterLink>
        <RouterLink to="/cart">
          <img src={assets.basket_icon} alt="Cart" />
        </RouterLink>

        {state.cart.length > 0 && <div className="dot"></div>}

        <RouterLink to="/login" className="signin-link">
          Sign in
        </RouterLink>
      </div>
    </nav>
  );
};

export default Header;
