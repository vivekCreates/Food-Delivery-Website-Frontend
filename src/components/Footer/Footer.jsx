import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className="inside-footer" id='contact-us'>
      <div className="left flex-box">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sed illum? Doloremque aliquid qui amet ea tempora explicabo dignissimos! Nostrum voluptatem earum iusto porro id molestiae. Vitae, quas quis! A.</p>

      </div>
      <div className="center flex-box">
        <h1>Company</h1>
        <div className="links ">
          <Link>Home</Link>
          <Link>About us</Link>
          <Link>Delivery</Link>
          <Link>Privacy Policy</Link>
        </div>
      </div>
      <div className="right flex-box">
        <h1>Get in Touch</h1>
        <div className="links ">
          <Link>+1-234-259-78</Link>
          <Link>conatct@Tomato.com</Link>
          
        </div>
      </div>
      </div>
      <h3>Copyright 2024@ Tomato.com-All rights reserved</h3>
    </footer>
  )
}

export default Footer