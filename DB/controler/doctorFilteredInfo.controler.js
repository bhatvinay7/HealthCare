import doctorModel from '../model/doctor.model.js'
import specialityModel from '../model/speciality.model.js'
import languageModel from '../model/language.model.js'
import cityModel from '../model/city.model.js'
import redis from '../redis.js';
import axios from 'axios'
// async function test(){
//    const value=await redis.get('status')  
//    if(!value){
//       console.log("hii")
//       await redis.set("status",'online')

//    } 
//    console.log(value)
// }
// test()





const getAllCities=async(req,res)=>{
         try{
            const result =await cityModel.findOne()
            res.status(200).json(result)

         }
         catch(err){
            res.status(500).json("Internal server error")
         }
}

const getAllLanguage=async(req,res)=>{
    try{
       const result =await languageModel.findOne()
       res.status(200).json(result)

    }
    catch(err){
       res.status(500).json("Internal server error")
    }
}

const getAllSpeciality=async(req,res)=>{
    try{
       const result =await specialityModel.findOne()
       res.status(200).json(result)

    }
    catch(err){
       res.status(500).json("Internal server error")
    }
}
// nano /etc/docker/daemon.json  # Linux/Mac
// notepad "C:\ProgramData\Docker\config\daemon.json"  # Windows
// docker system prune -f
// systemctl restart docker  # Linux
// net stop com.docker.service && net start com.docker.service  # Windows (Admin CMD)


const getAllDoctor=async(req,res)=>{
    try{
      const {city='',gender='',lang='',speciality='',page=1}=req.query
      const query = {};
      const matchStage={}
      const pipeline=[]

if (city) query.city = city;
if (gender) query.gender = gender;
if (speciality) query.speciality = speciality;

// Handle `language_speaks` (search in array field)
if (lang) query.language_speaks =lang 


for (const [key, value] of Object.entries(query)) {
   if(value) {
       if (key === "language_speaks") {
           matchStage[key] = value   // Checks if value is present in the array
       } 
      else if (key === "gender") {
           matchStage[key] = value
       }      // Exact match for enum
      else if(key==="speciality"){
         matchStage[key] =value

       }    
      else   if (key === "city") {
           matchStage[key] =value  // Case-insensitive match
       }
   }
}

// Push matchStage to the aggregation pipeline
if (Object.keys(matchStage).length > 0){
   pipeline.push({ '$match': matchStage });
}
pipeline.push({
   '$lookup': {
     'from': 'doctors',  // Self-join to get total count
     'pipeline': [
       { '$match':matchStage },
       { '$count': 'totalCount' }
     ],
     'as': 'totalCountData'
   }
 },
 { '$addFields': { totalCount: { '$arrayElemAt': ['$totalCountData.totalCount', 0] } } }, // Extract total count
 {
   '$addFields': {
     totalPages: { '$ceil': { '$divide': ['$totalCount', 5] } } // Compute total pages (5 docs per page)
   }
 },
 { '$sort': { experience_in_years: -1 } },  // Step 2: Sort by experience (Descending)
 { '$skip': (page-1)*5 },  // Step 3: Skip first 10 docs (for pagination)
 { '$limit': 5 })
pipeline.push({ $project: { _id: 1, city: 1, gender: 1, speciality: 1, language_speaks: 1,doctor_name:1,experience_in_years:1,degree:1,experience:1,doctor_image:1,totalPages:1 } });
       const result =await doctorModel.aggregate(pipeline)
       res.status(200).json(result)

    }
    catch(err){
       res.status(500).json("Internal server error")
    }
}

export {getAllCities,getAllSpeciality,getAllLanguage,getAllDoctor}