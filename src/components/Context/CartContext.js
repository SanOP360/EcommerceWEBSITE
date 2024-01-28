
import React, { createContext, useState,useContext,useEffect } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const CartContext = createContext();

export const Provider = (props) => {
  console.log('Provider props:',props)
  const [items, updatedItems] = useState([]);
  const authCtx= useContext(AuthContext);
  const isLoggedIn=authCtx.isLoggedIn;
  const useremail=authCtx.email;



  const getItem=async()=>{
    try{
      const response = await axios.get(`https://crudcrud.com/api/c9173769128d4e18b275992864a036a6/${useremail}`);

      updatedItems(response.data)
    }
    catch(error){
      console.log('Error fetching cart items:',error);
    }
  }

  useEffect(()=>{
    const storedItems=localStorage.getItem('cartItems');
    if(storedItems){
      updatedItems(JSON.parse(storedItems));
    }
  },[]);


  useEffect(()=>{
    if(isLoggedIn){
      getItem();
    }
    else{
      updatedItems([]);
    }
  },[isLoggedIn])

  const addItemHandler = async (item) => {
    const updatedItemsArray = [...items];
    let url = `https://crudcrud.com/api/c9173769128d4e18b275992864a036a6/${useremail}`;

    // Check if an item with the same title already exists in the cart
    const existingItemIndex = updatedItemsArray.findIndex(
      (existingItem) => existingItem.title === item.title
    );

    if (existingItemIndex !== -1) {
      // If the item already exists, update the quantity in the cart state
      updatedItemsArray[existingItemIndex].quantity += Number(item.quantity);

      try {
        // Update the item's quantity on the server
        const itemIdToUpdate = updatedItemsArray[existingItemIndex]._id; // Assuming _id is the unique identifier for items on the server
        const updatedItem = {
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price,
          quantity: updatedItemsArray[existingItemIndex].quantity,
        };

        // Make a PUT request to replace the item on the server with the updated quantity
        await axios.put(`${url}/${itemIdToUpdate}`, updatedItem);

        // Update the cart state
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      try {
        
        const res = await axios.post(url, item);

        // Add the item to the cart state
        updatedItemsArray.push(res.data);

        // Update the cart state
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
    updatedItems(updatedItemsArray);
  };

 
  const removeItemHandler = async (id) => {
    try {
     
      await axios.delete(
        `https://crudcrud.com/api/c9173769128d4e18b275992864a036a6/${useremail}/${id}`
      );

     
      const updatedItemsArray = items.filter((item) => item._id !== id);
      updatedItems(updatedItemsArray);
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
