import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import './Store.css';
import { Link } from "react-router-dom";
import WhiteHeadphone from '../assets/WhiteHeadphone.jpeg';
import BlueHeadphone from '../assets/BlueHeadphone.jpeg';
import BlackSpeaker from '../assets/BlackSpeaker.jpg';
import wirelessEarphone from '../assets/wirelessEarphone.webp';

const Item = () => {
  const CartCtx = useContext(CartContext);

  const productsArr = [
    {
      id: 1,
      title: "Boat Rockerzz 500",
      price: 2000,
      imageUrl:
        WhiteHeadphone,
    },
    {
      id: 2,
      title: "Samsung Headphones",
      price: 3000,
      imageUrl:
        BlueHeadphone,
    },
    {
      id: 3,
      title: "JBL Loud 790",
      price: 3000,
      imageUrl:
        BlackSpeaker,
    },
    {
      id: 4,
      title: "Boat air 150",
      price: 1499,
      imageUrl:
        wirelessEarphone,
    },
  ];

  const addCartHandler = (product) => {
    CartCtx.addCart(product);
  };

  return (
    <div className="container">
      <div className="row">
        {productsArr.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              
              <Link to={`/store/${product.id}`}>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.title}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
              </div>
              <div>
                <Button onClick={() => addCartHandler(product)}>
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;