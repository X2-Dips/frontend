import React from 'react'
import Webcam from 'react-webcam'
import { useRef } from 'react'

export default function Camera() {
    const webRef=useRef(null)
    const showImage = ()=> {
        console.log(webRef.current. getScreenshot());
    };
    return (
        <div>
            <h1 style={{marginLeft:"15em", fontSize:"30px"}}>Take Image From Camera</h1>
            <Webcam style={{marginLeft:"20em",height:"25em", }}
            ref={webRef}/>
            <br></br>
            <br></br>
            <button style={{marginLeft:"45em",width:"150px",height:"30px", borderRadius:"5px",color:"white",background:"black"}}
            onClick={()=> {
                showImage();
            }

            }>
            Take Picture

            </button>
            <br></br>
            <br></br>
        </div>
    )
}
