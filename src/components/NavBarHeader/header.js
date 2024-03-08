import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartContext from "../Context/CartContext";
import "./header.css";
import AuthContext from "../Context/AuthContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/auth");
  };

  const isLoggedIn = authCtx.isLoggedIn();

  const loginHandler = () => {
    navigate("/auth");
  };


  const totalQuantity = Object.values(cartCtx.items).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-dark">
      <div className="container">
        <span className="brandName">NoteNexus</span>
        <nav className="navbar">
          <ul className="nav-list">
            {isLoggedIn && (
              <li className="nav-item">
                <NavLink activeClassName="active" to="">
                  Home
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <NavLink activeClassName="active" to="/Store">
                  Store
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink activeClassName="active" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="manBtns">
            <div className="loginLogout">
              {isLoggedIn ? (
                <button onClick={logoutHandler}>Logout</button>
              ) : (
                <button onClick={loginHandler}>Login</button>
              )}
            </div>
            {isLoggedIn && (
              <div className="nav-cart">
                <button onClick={props.onShowCart} className="cartBtn">
                  <div className="CartBadge">
                    <span className="CartName">Cart</span>
                    <span className="badgeQuan">{totalQuantity}</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
