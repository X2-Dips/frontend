import React from 'react'
import Slider from 'react-slick';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
    var settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
      };
    return (
        <div>
           <Slider {...settings}>
               <div>
                   <h3>1</h3>
               </div>
               <div>
                   <h3>1</h3>
               </div><div>
                   <h3>1</h3>
               </div>
           </Slider>
            
        </div>
    )
}

export default Carousel
