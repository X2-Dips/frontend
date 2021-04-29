// import React from "react";
// import Rating from "./Rating";
// import { BiRupee } from "react-icons/bi";

// import { Link } from "react-router-dom";

// const SingleProductCard = ({ product }) => {
//   // const { _id, name, category, image, price, rating, numReviews } = product;
//   const { _id, name, category, image, rating, numReviews } = product;
//   return (
//     <>
//       <article className="product-card">
//         <Link to={`products/product${_id}`} className="product-card-link">
//           <div className="product-card-frame">
//             <img src={image} alt={name} className="product-card-img" />
//           </div>
//           <div className="card">
//             <div className="card-details">
//               <Link to={`products/product${_id}`}>
//                 <h1 className="card-title">{name}</h1>
//               </Link>
//               <p className="card-categoty">{category}</p>
//               <div className="card-rating">
//                 <span className="card-rating-design">{rating}</span>
//                 <span>
//                   <Rating rating={rating} />
//                 </span>
//                 <span className="card-reviews">{numReviews} Reviews</span>
//               </div>
//               {/* <div className="card-price flexBox">
//                 <BiRupee />
//                 <strong>{price}/Kg</strong>
//               </div> */}
//             </div>
//             {/* <button className="btn add-to-cart-btn">Add To Cart</button> */}
//           </div>
//         </Link>
//       </article>
//     </>
//   );
// };

// export default SingleProductCard;
