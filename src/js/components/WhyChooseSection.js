import React from 'react';
import clean from '../images/ants/clean.png';
import styled from 'styled-components';
const ChooseStyle= styled.div`
text-align:center;
.choose-image{
    img{
        width:6em;
        height:5em;
    }
}
.Ctitle{
    font-size:2rem;
}
.para{
    margin-top:1rem;
    align-item:center;
}
`

export default function WhyChooseSection({
   
        icon=<img src={clean} alt=""/>,
        title="Avoid Brokers",
        desc="we directly connect you to verified owners to save brokerage" 
        
  
    
})
 {
    return (
        <ChooseStyle>
          <div className="choose-image">
               {/* icon= <img src={agreement}/> */}
               {icon}
               <div className="Ctitle">{title}</div>

                <p className="para">{desc}</p>
            </div>
            
        </ChooseStyle>
    )
}
