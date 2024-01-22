
import Modal from "../UI/Modal";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import classes from "./Cart.module.css";
import CartContext from "../store/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    cartCtx.removeItem(itemId);
  };

  const cartItem = () => (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <span>Rs {item.price}</span>
          <span>Quantity: {item.quantity}</span>
          <span>
            <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
              Remove
            </Button>
          </span>
        </li>
      ))}
    </ul>
  );

  const totalAmount = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
    
  return (
    <Modal onClose={props.onClose}>
      {cartItem()}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs {totalAmount}</span>
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
