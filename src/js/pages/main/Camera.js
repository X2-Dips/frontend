import React from 'react'
import Webcam from 'react-webcam'
import { useRef } from 'react'
import "../main/UploadImages.css";

export default function Camera() {
    const webRef=useRef(null)
    const showImage = ()=> {
console.log(webRef.current. getScreenshot());
    };
    return (
        <div>
            <h1 className="takeImage">
            Take Image From Camera</h1>
            <Webcam className="webcamCSS"
           
            ref={webRef}/>
            <br></br>
            <br></br>
            <button className="clickPhoto"
          
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
