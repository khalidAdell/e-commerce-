import React, { useEffect, useState } from "react";

const Shop = props => {
  let [categories, setCategories] = useState({
    objects: [
      { name: "Smartphones" },
      { name: "Laptops" },
      { name: "Fragrances" },
      { name: "Skincare" },
      { name: "Groceries" },
      { name: "Home-Decoration" },
    ],
    activeEle: null,
  });

  let toggleActive = index => {
    setCategories({
      ...categories,
      activeEle: categories.objects[index].name.toLowerCase(),
    });
  };
  let addActive = index => {
    return categories.activeEle === categories.objects[index].name.toLowerCase()
      ? "category-active"
      : "";
  };
  let filterCategory = props.techProducts.filter(category => {
    return category.category === categories.activeEle;
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
      : console.log(5);
  }, [props.cartItems]);

  return (
    <main>
      <div className="landing-page shop-landing">
        <div>
          <h1>iProducts</h1>
          <h2>Get all what you want</h2>
          <button>Buy Now</button>
        </div>
        <div>
          <p>How are you customer</p>
          <p>How are you customer</p>
          <p>How are you customer</p>
        </div>
      </div>
      <div className="categories">
        <ul className="categories-links">
          {categories.objects.map((category, index) => {
            return (
              <p
                className={addActive(index)}
                onClick={() => toggleActive(index)}
                key={category.name}
              >
                {category.name}
              </p>
            );
          })}
        </ul>
      </div>
      <div className="shop-products">
        {categories.activeEle !== null
          ? filterCategory.map(product => {
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
                  <div className="cart" onClick={() => addToCart(product)}>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              );
            })
          : props.techProducts.map(product => {
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
                  <div className="cart" onClick={() => addToCart(product)}>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              );
            })}
      </div>
    </main>
  );
};

export default Shop;
