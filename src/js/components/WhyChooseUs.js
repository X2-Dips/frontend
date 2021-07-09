import React from 'react';
import WhyChooseSection from '../components/WhyChooseSection';
import styled from 'styled-components';
import agreement from '../images/ants/agreement.png';
import broker from '../images/ants/broker.png';
import pocket from '../images/ants/pocket.png';
import safety from '../images/ants/safety.png';
import freelisting from '../images/ants/freelisting.png';
import comfort from '../images/ants/comfort.png';
import house from '../images/ants/house.png';

const ChooseUs = styled.div`
padding:10rem 10rem;
.quality{
    display:flex;
    gap:5rem;
    justify-content:space-around;
    margin-top:-11rem;
    }
    @media only screen and (max-width:768px){
        .quality{
            flex-direction:column;
            max-width:350px;
            margin:0 auto;
            margin-top:-3rem;
            
            ${'' /* gap:5rem; */}
            
        }
       
    }

`

function WhyChooseUs() {
    return (
        <div>
        <ChooseUs>
        <div className="containerx1">
            <div className="quality">
                <WhyChooseSection
                    icon={<img src={broker} alt=""/>}
        title="Avoid Brokers"
        desc="we directly connect you to verified owners to save brokerage" 
        
                />
                <WhyChooseSection
                      icon={<img src={freelisting} alt=""/>}
            
            title="Free listing"
            desc="Easy listing process. Also using WhatsApp"
                />
                <WhyChooseSection
                      icon={<img src={house} alt=""/>}
            
            title="Shortlist without visit"
            desc="Extensive information makes it easy"
                />
                <WhyChooseSection
                       icon={<img src={agreement} alt=""/>}
            
            title="Rental Agreement"
            desc="Assistance in creating rental agreement & paper work"
                />
            </div>
        </div>
        </ChooseUs>
        <ChooseUs>
        <div className="containerx2">
            <div className="quality">
                <WhyChooseSection
                      icon={<img src={comfort} alt=""/>}
            
            title="Comfort & convenience"
            desc="Furnished Homes with a wide range of amenities. Just move-in 
with your bags"
                
                />
                <WhyChooseSection
                      icon={<img src={safety} alt=""/>}
            
            title="Safety & Security"
            desc="” High-end security with CCTV cameras and On-call stay supervisor"
                />
                
                <WhyChooseSection
                       icon={<img src={pocket} alt=""/>}
            
            title="Pocket Friendly"
            desc="Super affordable rooms on rent available on private or sharing basis."
                
                />
            </div>
        </div>
        
            
        </ChooseUs>
        </div>
    )
}

export default WhyChooseUs
