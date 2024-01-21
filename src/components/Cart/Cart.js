import Modal from "../UI/Modal";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./Cart.module.css";

const defaultItems = [
  {
    id: 1,
    title: "Colors",
    price: 100,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
  },
];

const Cart = (props) => {
  const [items, setItems] = useState(defaultItems);

  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const cartItem = () => (
    <ul className={classes["cart-item"]}>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <span>Rs {item.price}</span>
          <span>
            <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
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
        <span>Rs 2000</span>
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
