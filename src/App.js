import React, { useContext, useState, lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/NavBarHeader/header";
import Item from "./components/Products/ProductItems";
import AuthContext from "./components/Context/AuthContext";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Provider } from "./components/Context/CartContext";
import Footer from "./components/UI/footer";
import Contact from "./components/Contact/Contact";
import AuthForm from "./components/AuthForm/AuthForm";
import { AuthProvider } from "./components/Context/AuthContext";
import ProductDetail from "./components/Products/ProductDetail";

const About = lazy(() => import("./components/About/About"));

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const showCartHandler = () => {
    setIsVisible(true);
    console.log("showCart handler is called");
  };

  const hideCartHandler = () => {
    setIsVisible(false);
  };

  return (
    <AuthProvider>
      <Provider>
        {isVisible && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {isLoggedIn ? (
            <>
              <Route path="/Store" element={<Item />} exact />
              <Route path="/Store/:productId" element={<ProductDetail />} />
            </>
          ) : (
            <Navigate to="/auth" />
          )}
          <Route
            path="/About"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
        <Footer />
      </Provider>
    </AuthProvider>
  );
}

export default App;
