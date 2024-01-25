// ProductDetail.js

import React from "react";
import { useParams } from "react-router-dom";
import "./Store.css"; // Import your CSS file

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;

  // Replace this with your logic to fetch product details based on productId
  const productDetails = {
    1: {
      title: "Colors",
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        // Add more image URLs as needed
      ],
      reviews: [
        "Review 1 for Colors",
        "Review 2 for Colors",
        "Review 3 for Colors",
      ],
    },
    2: {
      title: "Black and white Colors",
      images: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        // Add more image URLs as needed
      ],
      reviews: [
        "Review 1 for Black and white Colors",
        "Review 2 for Black and white Colors",
        "Review 3 for Black and white Colors",
      ],
    },
    // Add more products as needed
  };

  const currentProduct = productDetails[productId];

  // Check if currentProduct is undefined
  if (!currentProduct) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h1 className="product-title">{currentProduct.title}</h1>
      <p className="product-id">{productId}</p>

      <div className="product-images">
        {currentProduct.images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="product-image"
            />
            <h2 className="image-review-title">{`Image ${
              index + 1
            } Review:`}</h2>
            <p className="image-review">{currentProduct.reviews[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
