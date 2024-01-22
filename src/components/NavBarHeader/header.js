import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
import CartContext from "../Context/CartContext";
import "./header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const totalQuantity = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  
  console.log("onShowCart:", props.onShowCart);

  return (
    <header className="bg-dark">
      <div className="container">
        <span className="brandName">GENERIC</span>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/Home">Home</a>
            </li>
            <li className="nav-item">
              <a href="/Store">Store</a>
            </li>
            <li className="nav-item">
              <a href="/About">About</a>
            </li>
          </ul>
          <div className="nav-cart">
            <button onClick={props.onShowCart} className="cartBtn">
              <div className="CartBadge">
                <span className="CartName">Cart</span>
                <span className="badgeQuan">{totalQuantity}</span>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
