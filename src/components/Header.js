import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      {/* top header  */}
      <div className="top-header">
        <div className="logo">
          Online
          <span> Store</span>
        </div>
        <div className="left-top">
          <input
            type="search"
            placeholder="search"
            value={props.search}
            onChange={e => props.setSearch(e.target.value)}
          />
          <NavLink className="cart" to="/cart">
            {props.cartItems.length > 0 ? (
              <div className="cart-alarm">{props.cartItems.length}</div>
            ) : null}
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </NavLink>
        </div>
      </div>
      {/* navBar */}
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
