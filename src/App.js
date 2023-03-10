import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import axios from "axios";

function App() {
  // Tech products catagory api
  let [techProduct, setTechProduct] = useState([]);
  let techProducts = async () => {
    let res = await axios.get("https://dummyjson.com/products");
    setTechProduct(res.data.products);
  };
  // console.log(techProduct);
  // best seller products api
  let [bestSeller, setBestSeller] = useState([]);
  let BestSellers = async () => {
    let res = await axios.get(
      "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
    );
    setBestSeller(res.data.products);
  };

  // add to cart
  let [cartItems, setCartItems] = useState([]);
  let [search, setSearch] = useState([]);
  let searchFun = techProduct.filter(product => {
    return (
      product.title.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search)
    );
  });
  useEffect(() => {
    cartItems.length > 0
      ? localStorage.setItem("storedItems", JSON.stringify(cartItems))
      : console.log(5);
  }, [cartItems]);
  useEffect(() => {
    techProducts();
    BestSellers();
    localStorage.getItem("storedItems")
      ? setCartItems(JSON.parse(localStorage.getItem("storedItems")))
      : setCartItems([]);
  }, []);
  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems} search={search} setSearch={setSearch} />

        {search.length > 0 ? (
          <div className="shop-products">
            {searchFun.map(product => {
              return (
                <div className="product" key={product.id}>
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
                  <div
                    className="cart"
                    onClick={() => setCartItems(prev => [...prev, product])}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  techProducts={techProduct}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  techProducts={techProduct}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
          </Routes>
        )}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
