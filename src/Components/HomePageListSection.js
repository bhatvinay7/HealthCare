import React from 'react'
import {Link} from 'react-router-dom'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
function HomePageListSection() {
  return (
    <div className='flex h-auto bg-slate-100 p-4 w-full items-center justify-center  gap-2 flex-wrap'>
           <div className=' w-44 h-32 bg-slate-300/75 hover:bg-gradient-to-r  hover:from-cyan-700 hover:via-cyan300 hover:to-cyan-600  group rounded-3xl border  flex flex-col justify-center items-center gap-4  border-black/45 shadow-md shadow-black/45'>
              <div className='bg-bookAppoint bg-center  bg-contain h-12 w-12'></div>
              <p className=" text-base text-black group-hover:text-white font-semibold">Book Appointment</p>
           </div>

          <Link to={'/doctor'}>
          
           <div className='w-48 h-32 bg-slate-300/75 hover:bg-gradient-to-r  hover:from-cyan-700 hover:via-cyan300 hover:to-cyan-600 group hover:brightness-105  rounded-3xl border flex flex-col justify-center items-center gap-4 border-black/45 shadow-md shadow-black/45'>
           {/* <FontAwesomeIcon className='w-12 h-12 text-white' icon={faMagnifyingGlass} /> */}
           <div className='w-12 h-12 bg-center   bg-contain bg-mgnifyingGlass'></div>
           <p className="text-base text-black group-hover:text-white font-semibold">Search Doctor</p>
           </div>
          </Link>
           <div className='w-48 h-32 bg-slate-300/75 hover:bg-gradient-to-r  hover:from-cyan-700 hover:via-cyan300 hover:to-cyan-600 shadow-md shadow-black/45 group hover:brightness-105 rounded-3xl border flex flex-col justify-center items-center gap-4 border-black/45'>
           <div className='bg-bookCheckUp   bg-center bg-no-repeat bg-contain h-12 w-12'></div>
           
           <p className="text-base text-black group-hover:text-white font-semibold">Book Health Check-Up</p>
           </div>
           <div className='w-48 h-32 bg-slate-300/75 hover:bg-gradient-to-r  hover:from-cyan-700 hover:via-cyan300 hover:to-cyan-600 shadow-md shadow-black/45 group hover:brightness-105 rounded-3xl border flex flex-col justify-center items-center gap-4 border-black/45'>
           {/* <FontAwesomeIcon className='w-12 h-12 text-white' icon={faMagnifyingGlass} /> */}
           <div className='w-12 h-12 bg-center    bg-contain bg-consultOnline'></div>
           <p className="text-base text-black group-hover:text-white font-semibold">Consult Online</p>
           </div>
           <div className='w-44 h-32 bg-slate-300/75 hover:bg-gradient-to-r  hover:from-cyan-700 hover:via-cyan300 hover:to-cyan-600 group hover:brightness-105  rounded-3xl border flex flex-col justify-center items-center gap-4 border-black/45 shadow-md shadow-black/45'>
    
           <div className='w-12 h-12  bg-center    group hover:brightness-105 bg-contain bg-ByMedicine'></div>
           <p className="text-base text-black group-hover:text-white font-semibold  ">Buy Medicine</p>
           </div>
           
           
    </div>
  )
}

export default HomePageListSection