import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './RentCarousels.css';
import { data } from '../Data';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

const PreviousBtn=(props)=>{
    console.log(props);
    const {className,onClick} = props
    return(
        <div className={className} onClick={onClick}>
        <ArrowBackIos style={{color:"blue" , fontSize: "30px"}}/>

        </div>

    )
}
const NextBtn=(props)=>{
    const {className,onClick} = props
    return(
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{color:"blue" , fontSize: "30px"}}/>
        </div>
        
    )
}


const RentCarousels = () => {
    return (
        <div style ={{ marginLeft:'60px'}} >
        
            <Slider 
            autoplay={true}
             autoplaySpeed={2000} 
             dots={true}
              infinite
              prevArrow={<PreviousBtn/>}
              nextArrow={<NextBtn/>}
              customPaging={(i)=>{
                  return(
                      <div>
                      <img src={data[i]} alt="" 
                       style={{width:"50px", height:"50px", borderRadius:'10px'}}/>
                    

                      </div>
                  )
              }}
              dotsClass="slick-dots custom-indicator "
              >
               {
                   data.map(item=>(
                    <div classname="caro">
                    <img src={item} alt="" style={{height:'70vh'}}
                    // style ={{width:'100%',height:'60vh'}}

                    />
                </div>

                   ))
               }
                
            </Slider>
        </div>
    )
}

export default RentCarousels
