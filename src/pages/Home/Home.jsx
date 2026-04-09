import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { food_list, menu_list } from "../../assets/assets";
import Card from "../../components/Card/Card";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

import Login from "../../components/Login/Login";
import Playstore from "../../components/PlayStore/Playstore";
import Register from "../../components/Register/Register";

const Home = () => {
  const [menu, setMenu] = useState(menu_list);
  const [menuName, setMenuName] = useState("");
   
   

  const getIndex = (index) => {
    setMenuName(menu[index].menu_name);
    console.log("menu List", menuName);
  };

  const filtered = food_list.filter((card) => {
    return card.category.toLowerCase().includes(menuName.toLowerCase());
  });


  return (
    <>
      <section className="container">
        {/* <SignIn/> */}
        {/* <Login/> */}
        <Header />
        <div className="food-bg">
          <div className="text">
            <h1>Order your favourite food here</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis nobis dolore in quis dolorum aliquid facere, officia
              commodi culpa atque iusto est maiores exercitationem nisi
              molestiae, numquam sequi. Hic, laborum.
            </p>
            <button className="btn">View menu</button>
          </div>
        </div>
        <div className="explore">
          <h1>Explore our menu</h1>
          <p>
            Choose fron a diverse featuring a delectable array of dishes. Our
            mission is to satisfy your
          </p>
          <p>
            cravings and elevate your dinning experience, one delicious mealt at
            a time
          </p>
          <div className="food-category">
            {menu.map((item, index) => {
              return (
                <ExploreMenu
                  data={item}
                  key={index}
                  onClick={() => {
                    getIndex(index);
                  }}
                  
                  // style={{border: menuName === index ? '3px solid blue' : '1px solid black'}}
                />
              );
            })}
          </div>
        </div>

        <section className="dishes">
          <h1>Top Dishes Near you</h1>
          <div className="dishes-cart">
            {filtered.map((item, index) => {
              return <Card
              data={item} 
              key={index}
               />;
            })}
          </div>
        </section>

        <Playstore />
      </section>
      <Footer />
    </>
  );
};

export default Home;
