import React from 'react'
import { assets } from '../../assets/assets'
import './Plastore.css'

const Playstore = () => {
  return (
    <div className="playstore" id='mobile-app'>
        <h1>For Better Experience Download Tomato App</h1>
        <div className="playstore-icons">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>

  )
}

export default Playstore