
import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const Provider = (props) => {
  console.log('Provider props:',props)
  const [items, setItems] = useState([]);

  const addCart = (item) => {
    const foundItem = items.find((newItem) => newItem.title === item.title);

    if (!foundItem) {
      setItems([...items, { ...item, quantity: 1 }]);
    } else {
      foundItem.quantity += 1;
      setItems([...items]);
    }
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ items, addCart, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
