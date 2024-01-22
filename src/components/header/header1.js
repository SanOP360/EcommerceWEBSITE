import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../store/CartContext";
import "./header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const totalQuantity = cartCtx.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-dark">
      <div className="container">
        <span className="brandName">GENERIC</span>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active-link"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/About"
                className="nav-link"
                activeClassName="active-link"
              >
                About
              </NavLink>
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
