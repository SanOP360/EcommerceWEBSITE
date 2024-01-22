import React, { useState } from "react";
import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/NavBarHeader/header";
import Item from "./components/Store/Store";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Provider } from "./components/Context/CartContext";
import About from "./components/About/About";
import Footer from "./components/UI/footer";

const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  { path: "/Home", element: <Home /> },
  { path: "/Store", element: <Item /> },
  { path: "/About", element: <About /> },
]);

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
      <RouterProvider router={router}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Item />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </RouterProvider>

      <Footer/>
    </Provider>
  );
}

export default App;
