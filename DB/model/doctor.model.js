import mongoose from 'mongoose';
const doctorSchema = new mongoose.Schema({
    doctor_name: { 
        type: String, required: true },
    experience_in_years: {
         type: Number, required: true },
    speciality: { 
        type: String, required: true },
    doctor_image: { type: String, required: true },
    language_speaks: { 
        type: [String], required: true },
    hospital_name: { 
        type: String, required: true },
    city: {
         type: String, required: true },
    gender: {
         type: String, enum: ['Male', 'Female', 'Other'], required: true },
    degree: { 
        type: String, required: true },
    description: { 
        type: String, required: true },
    experience: {
         type: String, required: true },
    special_interest: {
         type: [String], required: true },
    membership: { 
        type: [String], required: true },
    research_and_publication: {
         type: String, required: true },
    awards_and_achievements: { 
        type: String, required: true },
    treatments: { 
        type: [String], required: true },
    conditions: { 
        type: [String], required: true }
  });
  
const doctorModel = mongoose.model('doctors', doctorSchema);
export default doctorModel
  