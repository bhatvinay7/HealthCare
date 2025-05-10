import mongoose from 'mongoose'
const languageSchema=new mongoose.Schema({
    language:{
        type:[String],
        required:true
      }
})
const languageModel=mongoose.model("languages",languageSchema);
export default languageModel