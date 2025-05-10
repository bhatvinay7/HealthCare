import mongoose from 'mongoose'
const citySchema=new mongoose.Schema({
      cities:{
        type:[String],
        required:true
      }
})
const cityModel=mongoose.model("cities",citySchema);
export default cityModel