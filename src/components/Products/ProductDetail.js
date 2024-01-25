
import React from "react";
import { useParams } from "react-router-dom";
import "./Store.css"; 
import WhiteHeadphone from '../assets/WhiteHeadphone.jpeg'
import WhiteHeadphone1 from "../assets/whiteHeadPhone1.jpg";
import WhiteHeadphone2 from "../assets/WhiteHeadphone2.jpg";
import WhiteHeadphone3 from "../assets/WhiteHeadphone3.png";

import BlueHeadphone from '../assets/BlueHeadphone.jpeg';
import BlueHeadphone1 from "../assets/BlueHeadphone1.jpg";
import BlueHeadphone2 from "../assets/BlueHeadphone2.webp";
import BlueHeadphone3 from "../assets/BlueHeadphone3.webp";

import wirelessearbud from '../assets/wirelessEarphone.webp';
import wirelessearbud1 from '../assets/Earbuds1.jpg';
import wirelessearbud2 from '../assets/earbuds2.jpg';
import wirelessearbud3 from '../assets/earbud3.webp';

import BlackSpeaker from '../assets/BlackSpeaker.jpg';
// import BlackSpeaker1 from "../assets/speakerImage1.jpg";
import BlackSpeaker2 from "../assets/speakerImage2.jpg";
import BlackSpeaker3 from "../assets/speakerImage3.jpg";





const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;

  const productDetails = {
    1: {
      title: "Boat Rockerzz 500",
      images: [
        WhiteHeadphone,
        WhiteHeadphone1,
        WhiteHeadphone2,
        WhiteHeadphone3,
      ],
      reviews: [
        "Great sound quality, comfortable to wear.",
        "Excellent build quality, stylish design.",
        "Best value for money in this price range.",
      ],
    },
    2: {
      title: "Samsung Headphones",
      images: [BlueHeadphone, BlueHeadphone1, BlueHeadphone2, BlueHeadphone3],
      reviews: [
        "Impressive sound isolation, ideal for travel.",
        "Wireless connectivity works flawlessly.",
        "Durable construction, highly recommended.",
      ],
    },
    3: {
      title: "JBL Loud 790",
      images: [BlackSpeaker, BlackSpeaker2, BlackSpeaker3],
      reviews: [
        "Powerful bass, perfect for music enthusiasts.",
        "Sleek design, adds an aesthetic touch to the room.",
        "Easy to set up and use, great value for the price.",
      ],
    },
    4: {
      title: "Boat air 150",
      images: [
        wirelessearbud,
        wirelessearbud1,
        wirelessearbud2,
        wirelessearbud3,
      ],
      reviews: [
        "Compact and lightweight, perfect for workouts.",
        "Long battery life, ideal for daily use.",
        "High-quality sound for such a small device.",
      ],
    },
  };

  const currentProduct = productDetails[productId];

  if (!currentProduct) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-images">
        {currentProduct.images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="product-image"
            />
          </div>
        ))}
      </div>

      <div className="product-details">
        <h1 className="product-title">{currentProduct.title}</h1>
        <h1 className="review-title"> ----Product Reviews</h1>

        {currentProduct.reviews.map((review) => (
          
            <p className="image-review">{review}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
