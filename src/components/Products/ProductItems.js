import React, { useContext,useEffect } from "react";
// import { Button } from "react-bootstrap";
// import CartContext from "../Context/CartContext";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import productsArr from "./ProductArr";
import ProductDisplay from "./ProductDisplay";

const Item = () => {
  // const CartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const product= productsArr.map((item)=>item)

  useEffect(() => {
    
    if (!authCtx.isLoggedIn) {
     
      navigate("/auth");
    }
  }, [authCtx.isLoggedIn, navigate]);

 
 

  return (
    <div className="container">
      <div className="row">
        {productsArr.map((item,index) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">

            <ProductDisplay
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
