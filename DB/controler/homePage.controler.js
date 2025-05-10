

import homepage from '../model/homepage.model.js';
import uploadOnCloudinary from '../cloudinary.js';
const posthomePagedetails=async(req,res)=>{
    const imageUrl=await uploadOnCloudinary(req.file.path);
    const body=req.body;
    try{
       const data=new homepage({
              heading:body.heading,
              shortInfo:body.shortInfo,
              img:imageUrl
       }).save().then(()=>{
        res.status(200).json("data saved successfully");
       }).catch((err)=>{
        res.status(500).json(err.message);
       })
      
    }
    catch(err){
        res.status(500).json(err.message);
    }
}
const gethomePagedetails=async(req,res)=>{
    try{
        const result=await homepage.find();
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}
export  {gethomePagedetails,posthomePagedetails};