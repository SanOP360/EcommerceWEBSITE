import './Store.css';
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";
// import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";

const ProductDisplay=(props)=>{
    const ctx=useContext(CartContext);

     const item = {
       title: props.title,
       imageUrl: props.imageUrl,
       price: props.price,
       quantity: Number(1),
     };

     const addCartHandler=(e)=>{
        e.preventDefault();

        ctx.addItem(item);
     }

     return(
        <div className="card">
              <Link to={`/store/${props.id}`}>
                <img
                  src={props.imageUrl}
                  className="card-img-top"
                  alt={props.title}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Price: ${props.price}</p>
              </div>
              <div>
                <Button onClick={ addCartHandler}>
                  Add To Cart
                </Button>
              </div>
            </div>
     )
}
export default ProductDisplay;


