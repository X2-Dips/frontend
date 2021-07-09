import React,{useState} from 'react';
import {BsImages} from "react-icons/bs";
import "../main/UploadImages.css";
import { Link } from 'react-router-dom';
import cameraIcon from "../../images/ants/cameraIcon.png";


export default function UploadMultipleImages() {
    const [selectedImages,setSelectedImage] = useState([])
            const imageHandleChange =(e)=>{
                //console.log(e.target.files)
                if(e.target.files){
                    const fileArray = Array.from(e.target.files).map((file)=> URL.createObjectURL(file))
                    console.log(fileArray)

                    setSelectedImage((prevImages)=>prevImages.concat(fileArray))
                    Array.from(e.target.files).map(
                        (file)=>URL.revokeObjectURL(file)
                    )
                }

            }
            const renderPhotos = (source)=>{
                return source.map((photo)=>{
                 
                    return<img style={{width:"300px",height:"180px", objectFit:"cover",padding:"0.75rem"}}
                     src={photo} key={photo} alt=""/>
                   
                })
            }
    return (
        <div>
           <div className="headingOfUpload">
Upload Images
</div>
<div className="cameraImage">
<div >
<Link to="/camera">
                <img src ={cameraIcon} style={{width:"80px"}} alt=""/>  
                </Link>
</div>
<div>
    <input type = "file" multiple id = "file" onChange={imageHandleChange}/>
    <div className="label-holder">
    <label htmlFor="file" className="uploadLabel">
        <BsImages size="55"/>
    </label>

    </div>
    <div className="result">
    {renderPhotos(selectedImages)}

    </div>
</div> 
</div>
        </div>
    )
}
