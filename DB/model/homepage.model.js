import mongoose from 'mongoose';
const homePageSchema = new mongoose.Schema({
     heading:{
        type:String,
     },
     shortInfo:{
      type:String,
     },   
     img:{
        type:String
     }
},{timestamps:true});
const HomePage = mongoose.model('HomePage',homePageSchema);
export default HomePage;