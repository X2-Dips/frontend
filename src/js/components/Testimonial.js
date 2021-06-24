import React, { useState } from "react";
import Slider from 'react-slick';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

import testimonial from "../images/ants/testimonial.png";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import TestimonialCard from "./TestimonialCard";


  //class Testimonial extends Component{ 
  export default function Testimonial() {
 
   
    const [current, setCurrent] = useState(0);
    const length = TestimonialCard.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
    var settings = {
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1
    };



    return (
      <>
        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        <button style={{background:"white", border:"none"}}
         onClick={prevSlide} 
        className="prev-btn">
        <BsChevronDoubleLeft />
      </button>
      
        <div style={{width:'40%'}}>
            <Slider {...settings}>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            {/* <TestimonialCard/>  */}
            
                {/* <TestimonialCard  data={{img:testimonial, 
                paragraph:"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage." ,
                         
                  Cname:"Nisha Rai",
                  occupation:"Engineer"           
                             

                }}/> */}
               
                 {/* <TestimonialCard  data={{img:testimonial, 
                paragraph:"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage." ,
                         
                  Cname:"Nisha Rai",
                  occupation:"Engineer"           
                             

                }}/> */}
                
                 
                </Slider>
               
           
        </div>
        
        <button  style={{background:"white", border:"none"}}
         onClick={nextSlide} 
        className="next-btn">
        <BsChevronDoubleRight />
      </button>
        </div>
        
        </>
    );
}
// export default Testimonial
  
