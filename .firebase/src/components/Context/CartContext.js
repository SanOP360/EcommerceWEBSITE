import React, { createContext, useState, useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";


import AuthContext from "./AuthContext";

const CartContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyAQ8n0qusnqtphI_Fa9x5oZGti1H_59f2c",
  authDomain: "ecommerceauthenticatioin.firebaseapp.com",
  databaseURL: "https://ecommerceauthenticatioin-default-rtdb.firebaseio.com",
  projectId: "ecommerceauthenticatioin",
  storageBucket: "ecommerceauthenticatioin.appspot.com",
  messagingSenderId: "999171477851",
  appId: "1:999171477851:web:2cafe2e0483c84b8f5ca7e",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export const Provider = (props) => {
  const [items, setItems] = useState({});
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  
  const useremail = authCtx.email.replace(/[.@]/g, "_");

  useEffect(() => {
    if (isLoggedIn) {
      getItem();
    } else {
      setItems({});
    }
  }, [isLoggedIn]);

  const getItem = () => {
    const cartRef = database.ref(`Ecommerce/${useremail}`);
    cartRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setItems(data || {});
    });
  };

 const addItemHandler = async (item) => {
   try {
     const existingItem = Object.values(items).find(
       (existingItem) => existingItem.title === item.title
     );

     if (existingItem) {
       const updatedItemRef = database.ref(
         `Ecommerce/${useremail}/${existingItem._id}`
       );
       await updatedItemRef.update({
         quantity: existingItem.quantity + Number(item.quantity),
       });
     } else {
       const newItemRef = database.ref(`Ecommerce/${useremail}`).push();
       const newItemKey = newItemRef.key;
       await newItemRef.set({ ...item, _id: newItemKey });
     }
   } catch (error) {
     console.error("Error adding item:", error);
   }
 };


  const removeItemHandler = async (itemId) => {
    try {
      await database.ref(`Ecommerce/${useremail}/${itemId}`).remove();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
