import React from "react";

const Cart = props => {
  let deleteItem = e => {
    props.setCartItems(
      props.cartItems.filter(item => {
        return item.id !== e.id;
      })
    );
    localStorage.setItem(
      "storedItems",
      JSON.stringify(
        props.cartItems.filter(item => {
          return item.id !== e.id;
        })
      )
    );
  };

  return (
    <>
      <table className="cart-page">
        <thead>
          <tr>
            <td>Product</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map(item => {
            return (
              <tr className="item" key={item.id}>
                <td className="item-img">
                  <img src={item.images[0]} alt="item" />
                  <div className="item-text">
                    <h3>{item.title}</h3>
                    <p>{item.brand}</p>
                    <p>{item.description.slice(0, 35)}...</p>
                  </div>
                </td>
                <td className="price">$ {item.price}</td>
                <td>
                  <button
                    onClick={() => deleteItem(item)}
                    className="removeBtn"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1 className="total-price">
        Total Price:
        <span className="price">
          {" "}
          ${" "}
          {props.cartItems.length > 0
            ? props.cartItems.reduce((acc, cur) => acc + +cur.price, 0)
            : "0"}
        </span>
      </h1>
    </>
  );
};

export default Cart;
