import React from "react";
// import { Link } from "react-router-dom";
import data from "../../../Data";
import Rating from "../../../components/Rating";
import { IoArrowBackCircle } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
const ProductScreen = (props) => {
  const singleProduct = data.products.find(
    (item) => item._id === props.match.params.id
  );
  const {
    // _id,
    name,
    image,
    // price,
    // description,
     rating,
    numReviews,
    // quantity,
    category,
  } = singleProduct;
  return (
    <div className="container py-1 ">
      <div to="/products" className="goback-link">
        <h3 className="flexBox ">
          <IoArrowBackCircle />
          <span>Back</span>
        </h3>
      </div>

      <article className="single-product-info">
        <div className="single-product-frame">
          <img src={image} alt={name} className="single-product-img" />
        </div>
        <div className="single-product-details">
          <h1 className="single-product-title">{name}</h1>
          <p className="single-product-categoty">{category}</p>
          <div className="single-product-rating">
            <span className="single-product-rating-design">{rating}</span>
            <span>
              <Rating rating={rating} />
            </span>
            <span className="single-product-reviews">{numReviews} Reviews</span>
          </div>
         
        </div>
      </article>
    </div>
  );
};

export default ProductScreen;
