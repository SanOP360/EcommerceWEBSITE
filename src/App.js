import React, { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Header from "./components/NavBarHeader/header";
import Item from "./components/Products/ProductItems";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Provider } from "./components/Context/CartContext";
import About from "./components/About/About";
import Footer from "./components/UI/footer";
import Contact from "./components/Contact/Contact";

import ProductDetail from "./components/Products/ProductDetail";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const showCartHandler = () => {
    setIsVisible(true);
    console.log("showCart handler is called");
  };

  const hideCartHandler = () => {
    setIsVisible(false);
  };

  return (
    <Provider>
      {isVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/Store" element={<Item /> } exact />
        <Route path="/Store/:productId" element={<ProductDetail/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
