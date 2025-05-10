import mongoose from 'mongoose'
const specialitySchema=new mongoose.Schema({
    speciality:{
        type:[String],
        required:true
      }
})
const specialityModel=mongoose.model("specialities",specialitySchema);
export default specialityModel