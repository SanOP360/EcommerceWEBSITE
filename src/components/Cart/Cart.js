import Modal from "../UI/Modal";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import classes from "./Cart.module.css";
import CartContext from "../Context/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);


  let totAmount=0;
  const productsArr=cartCtx.items;
   productsArr.forEach((item) => {
     totAmount += item.quantity * item.price;
   });

  console.log("cart is rendering");

  const cartItem = () => (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => (
        <li key={item.title}>
          <span>{item.title}</span>
          <span>Rs {item.price}</span>
          <span>Quantity: {item.quantity}</span>
          <span>
            <Button variant="danger" onClick={() => cartCtx.removeItem(item._id)}>
              Remove
            </Button>
          </span>
        </li>
      ))}
    </ul>
  );


  return (
    <Modal onClose={props.onClose}>
      {cartItem()}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs {totAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
