import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = props => {
  let buyBtn = useNavigate();

  let [carouselWidth, setCarouselWidth] = useState(0);
  let carouselRef = useRef();

  useEffect(() => {
    props.techProducts.length > 0
      ? setCarouselWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        )
      : setCarouselWidth(0);
  });

  let smartPhones = props.techProducts.filter(product => {
    return product.category === "laptops";
  });

  // add To Cart
  let addToCart = e => {
    props.setCartItems(prev => {
      return prev.includes(e) ? [...prev] : [...prev, e];
    });
  };

  useEffect(() => {
    props.cartItems.length > 0
      ? localStorage.setItem("storedItems", JSON.stringify(props.cartItems))
      : console.log("*_*");
  }, [props.cartItems]);

  return (
    <main>
      <div className="landing-page">
        <div>
          <h1>iProducts</h1>
          <h2>Get all what you want</h2>
          <button onClick={() => buyBtn("/shop")}>Buy Now</button>
        </div>
        <div>
          <p>How are you customer</p>
          <p>How are you customer</p>
          <p>How are you customer</p>
        </div>
      </div>
      {props.techProducts.length > 0 ? (
        <section className="bestSellers">
          <h2 className="sect-title">BestSellers</h2>
          <motion.div
            className="carousel"
            ref={carouselRef}
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -carouselWidth }}
              className="products inner-carousel"
            >
              {props.techProducts.map(product => {
                return (
                  <motion.div
                    className="product slide-product"
                    key={product.id}
                  >
                    <div>
                      <img src={product.images[0]} alt="product" />
                    </div>
                    <div className="product-text">
                      <h3>{product.title}</h3>
                      <p className="p-price">$ {product.price}</p>
                      <p className="p-rate">
                        {product.rating} <i className="fa-solid fa-star"></i>
                      </p>
                    </div>
                    <div className="cart" onClick={() => addToCart(product)}>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>
      ) : (
        "loading..."
      )}
      <section className="featuerdProducts">
        <h2 className="sect-title">Featuerd Products</h2>
        <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -carouselWidth }}
            className="products inner-carousel"
          >
            {smartPhones.map(product => {
              return (
                <motion.div className="product" key={product.id}>
                  <div>
                    <img src={product.images[0]} alt="product" />
                  </div>
                  <h3>{product.title}</h3>
                  <p className="p-price">$ {product.price}</p>
                  <p className="p-rate">
                    {product.rating} <i className="fa-solid fa-star"></i>
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
