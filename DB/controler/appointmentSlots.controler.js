//import appointment from  '../model/appointmentSlots.model.js'
 
const getSlots=async(req,res)=>{
    const date=req.query.date
    const doctorName=req.query.doctorName
    console.log("hiii")
     res.status(200).json("sss")
    // appointment.aggregate([
    //     {
    //        "$match":{
    
    //        }
    //     },
    // ])

}

export {getSlots}

