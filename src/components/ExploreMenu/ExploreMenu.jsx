import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list}  from "../../assets/assets.js";
const ExploreMenu = ({data,onClick}) => {
    return (
      <div className="food-card" id="menu">
        <div className= {`img-container`} onClick={onClick}>
          <img src={data.menu_image} alt="" />
        </div>
        <p>{data.menu_name}</p>
      </div>
    );
};

export default ExploreMenu;
