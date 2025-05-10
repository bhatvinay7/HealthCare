import {v2 as cloudinary} from "cloudinary";
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.REACT_CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.REACT_CLOUDINARY_API_KEY, 
        api_secret:process.env.REACT_CLOUDINARY_API_SECRET  // Click 'View API Keys' above to copy your API secret
    });
    const uploadOnCloudinary=async(localFilePath)=>{
        try{
     if(!localFilePath){
        return null
     }
     console.log(localFilePath);
     //upload the file on clodinary
     const response=await cloudinary.uploader.upload(localFilePath,{
        resourece_type:"auto"
     })
     //file has been uploaded successfully
     fs.unlink(localFilePath,(err)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log("file deleted");
        }
        })
     return response.secure_url
        }catch(err){
console.log(err.message)
fs.unlink(localFilePath,(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("file deleted");
    }
    })

//return null
//remove the locally saved temporary file as the upload operation got failed
        }
        
    }
export default uploadOnCloudinary;