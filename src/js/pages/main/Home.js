import React from "react";
import Carousels from "../../components/Carousels";
import data from "../../Data";

import Rating from "../../components/Rating";


const Home = () => {
  const deals = data.products.filter((product) => product.deals === true);

  return (
    <>
      <Carousels />
      <hr />
      <div className="container-full mx-auto ">
        <div className="container mx-auto">
          <div className="deals">
            
            <hr />
            <section className="deal-products">
              {deals.map((deal) => {
                const {
                  _id,
                  name,
                  category,
                  image,
                
                  rating,
                  numReviews,
                } = deal;

                return (
                  <article className="product-card">
                    <div
                      to={`products/product${_id}`}
                      className="product-card-link"
                    >
                      <div className="product-card-frame">
                        <img
                          src={image}
                          alt={name}
                          className="product-card-img"
                        />
                      </div>
                      <div className="card">
                        <div className="card-details">
                          <div to={`products/product${_id}`}>
                            <h1 className="card-title">{name}</h1>
                          </div>
                          <p className="card-categoty">{category}</p>
                          <div className="card-rating">
                           
                            <span>
                              <Rating rating={rating} />
                            </span>
                            <span className="card-reviews">
                              {numReviews} Reviews
                            </span>
                          </div>
                         
                        </div>
                        
                      </div>
                    </div>
                  </article>
                  
                );
              })}
            </section>
          </div>
        </div>
        <hr />
      </div>
     
      
    </>
  );
};

export default Home;
