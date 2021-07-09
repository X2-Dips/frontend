import React from 'react'
import ServiceSection from './ServiceSection'
import styled from 'styled-components';
import carpentry from "../images/ants/carpentry.png";
import movers from "../images/ants/movers.png";
import plumber from "../images/ants/plumber.png";
import clean from "../images/ants/clean.png";
import pest from "../images/ants/pest.png";
import electric from "../images/ants/electric.png";



const ServiceitemStyle = styled.div`
padding:10rem 10rem;
.service-item{
    display:flex;
    gap:5rem;
    justify-content:space-around;
    margin-top:-7rem;
    }
    @media only screen and (max-width:768px){
        .service-item{
            flex-direction:column;
            max-width:350px;
            margin:0 auto;
            margin-top:5rem;
            margin-bottom:10rem;
            gap:5rem;
            
        }
       
    }

`
export default function ServicePage(){
    return (
        <ServiceitemStyle>
        <div 
        className="container">
        <div className="service-item"> 
            <ServiceSection/>
            <ServiceSection
               icon={<img src={carpentry} alt=""/>}
            
                title="Carpentry"
            />
            <ServiceSection
                 icon={<img src={plumber} alt=""/>}
            
            title="Plumber"
            />
            <ServiceSection
                 icon={<img src={movers} alt=""/>}
            
            title="Movers & Packers"
            />
            <ServiceSection
                 icon={<img src={electric} alt=""/>}
            
            title="Electrician"
            />

            <ServiceSection
                 icon={<img src={clean} alt=""/>}
            
            title="Cleaning"
            />

            <ServiceSection
                 icon={<img src={pest} alt=""/>}
            
            title="Pest Control"
            />
        </div>
        
            
        </div>
        </ServiceitemStyle>
    )
}
