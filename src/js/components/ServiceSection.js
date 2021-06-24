import React from 'react';
import agreement from '../images/ants/agreement.png';
import styled from 'styled-components';
const ItemStyle= styled.div`
text-align:center;
.service-image{
    img{
        width:6em;
        height:5em;
    }
}
.service-title{
    font-size:2rem;
}
`
export default function ServiceSection({
    icon=<img src={agreement}/>,
    title='Agreement',
}) 


{
    return(
        <ItemStyle>
            <div className="service-image">
               {/* icon= <img src={agreement}/> */}
               {icon}

                <div className="service-title">{title}</div>
            </div>
        </ItemStyle>
    )
}