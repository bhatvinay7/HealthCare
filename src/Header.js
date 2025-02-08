import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <div className=' fixed inset-0 block h-20 bg-white sm:h-32 z-40 '>
 <header className='w-full h-full  shadow-sm shadow-black/25 '>
                    <div className=' w-full h-auto '>
                        <div className='w-full  h-auto flex justify-start items-center '>
                            <div className='w-3/5 flex justify-end items-center mt-6 '>
                                <input type='search' placeholder=' search for docters or hospital' className='w-3/5 p-3 bg-slate-200 rounded-md  outline-none border border-black/25 text-xs '></input>
                                <div className='max-w-fit h-auto rounded-md'>
                                    <button className=' w-full border rounded-md text-xs bg-black text-white p-3'>search</button>
                                </div>
                               
                            </div>
                           
                            <div className=' w-1/5 flex  items-start justify-start gap-x-2  ml-4'>
                                    <div className='flex flex-col items-start justify-center space-y-2 '>
                                        <p className='text-black text-xs font-semibold self-start '>Empergency</p>
                                        <div className='w-fit  border border-slate-100 bg-teal-500/75 hover:bg-teal-500 hover:text-yellow-300 text-base rounded-md text-black p-2'>1808</div>
                                    </div>  
                                    <div className='flex flex-col items-center justify-center space-y-2 '>
                                        <p className='text-black text-xs font-semibold self-start '>Lifeline</p>
                                        <div className='w-fit border border-slate-100 bg-teal-500/75  hover:bg-teal-500 hover:text-yellow-300 rounded-md text-base text-black p-2'>1808-020-2334</div>
                                    </div>
                                   
                                </div> 
                                </div>
                            <div>
                                            
                        </div>
                        <div className='flex justify-center w-full   z-40  items-center h-full mt-6 px-4 sm:px-8'>
                            {/* <div className='text-2xl sm:text-3xl text-slate-900 font-bold'>Hospital Management</div> */}
                            <div className='flex mx-auto items-center w-1/2 justify-around  space-x-4'>
                                {/* <div className='text-slate-900 font-semibold'>Home</div> */}
                                <div className="text-slate-900 group/Centres  hover:text-teal-500  w-auto h-auto">
  Centres of Excellence
  <FontAwesomeIcon className="text-xs" icon={faAngleDown} />

  
  <ul className="absolute  z-40  top-28 w-3/5 right-1/4 text-black text-xs hidden group-hover/Centres:grid  grid-cols-3  place-items-stretch place-content-start shadow-md  to bg-white font-semibold rounded-md border-r caret-transparent border-black/20 shadow-black/25">
    <li className="p-2 border-r border-black/20 w-full">hihlhlhhllhlhlhhhlhlhlhlh</li>
    <li className="p-2 border-r border-black/20 w-full">hilhlhlhlhlkhklhklkhlhlhkhk</li>
    <li className="p-2 border-r border-black/20 w-full ">hijkjlkjljljljlljlkjljkljkljlj</li>
    <li className="p-2 border-r border-black/20 w-full">hihlhlhhllhlhlhhhlhlhlhlh</li>
    <li className="p-2 border-r border-black/20 w-full">hilhlhlhlhlkhklhklkhlhlhkhk</li>
    <li className="p-2 border-r border-black/20 w-full">hijkjlkjljljljlljlkjljkljkljlj</li>
    <li className="p-2 border-r border-black/20 w-full ">hijkjlkjljljljlljlkjljkljkljlj</li>
    <li className="p-2 border-r border-black/20 w-full">hijkjlkjljljljlljlkjljkljkljlj</li>
    <li className="p-2 border-r border-black/20 w-full ">hijkjlkjljljljlljlkjljkljkljlj</li>
    <li className="p-2 border-r border-black/20 w-full">hihlhlhhllhlhlhhhlhlhlhlh</li>
    <li className="p-2 border-r border-black/20">hilhlhlhlhlkhklhklkhlhlhkhk</li>
    <li className="p-2 border-r border-black/20 w-full">hijkjlkjljljljlljlkjljkljkljlj</li>
    <li className="p-2 border-r border-black/20 w-full">hihlhlhhllhlhlhhhlhlhlhlh</li>
    <li className="p-2 border-r border-black/20 w-full">hilhlhlhlhlkhklhklkhlhlhkhk</li>
    <li className="p-2 border-r border-black/20 w-full">hijkjlkjljljljlljlkjljkljkljlj</li>
    <li className="p-2 border-r border-black/20 w-full">hihlhlhhllhlhlhhhlhlhlhlh</li>
    <li className="p-2 border-r border-black/20 w-full ">hilhlhlhlhlkhklhklkhlhlhkhk</li>
    <li className="p-2 border-r border-black/20 w-full">hijkjlkjljljljlljlkjljkljkljlj</li>
  </ul>
</div>

                                <div className='text-slate-900 flex  z-40 w-fit h-auto relative flex-col group text-base'>
                                    <div className='hover:text-teal-500 w-fit h-fit '>
                                    Corporate <FontAwesomeIcon className='text-xs' icon={faAngleDown} />
                                    </div>
                                    <div className=' group-hover:w-52 group-hover:block hidden absolute group-hover:top-6 bg-slate-50 shadow-md p-4 rounded-md  shadow-black/25'>
                                       <ul className='w-full ha-auto space-y-3'>
                                        <li className='text-xs cursor-pointer  font-sans font-semibold'>Post a Query</li>
                                        <li className='text-xs  cursor-pointer font-sans font-semibold'>Consult Docters Online</li>
                                        <li className='text-xs   cursor-pointer font-sans font-semibold'>Book Physical Appointment </li>
                                        <li></li>
                                       </ul>
                                    </div>
                                </div>
                                {/* <div className='text-slate-900  text-base'>About</div> */}
                                <div className='text-slate-900  z-40 flex w-fit h-auto relative flex-col group   text-base'>
                                    <div className='hover:text-teal-500 w-fit h-fit '>
                                    Contact Us <FontAwesomeIcon className='text-xs' icon={faAngleDown} />
                                    </div>
                                    <div className=' w-52 group-hover:block hidden absolute group-hover:top-6 bg-slate-50 shadow-md p-4 rounded-md  shadow-black/25'>
                                       <ul className='w-full ha-auto space-y-3'>
                                        <li className='text-xs cursor-pointer   font-sans font-semibold'>Post a Query</li>
                                        <li className='text-xs  cursor-pointer font-sans font-semibold'>Consult Docters Online</li>
                                        <li className='text-xs   cursor-pointer font-sans font-semibold'>Book Physical Appointment </li>
                                        <li></li>
                                       </ul>
                                    </div>
                                </div>
                                <div className="text-slate-900 flex w-fit h-auto relative flex-col group text-base">
  
  <div className="hover:text-teal-500 w-fit h-fit">
    Corporate <FontAwesomeIcon className="text-xs" icon={faAngleDown} />
  </div>

  <div className="hidden absolute w-52 top-6 caret-transparent  z-40 bg-slate-50 shadow-md p-4 rounded-md shadow-black/25 group-hover:block ">
    <ul className="w-full h-auto space-y-3">
    
      <li className="text-xs cursor-pointer font-sans font-semibold">Career</li>

     
      <li className="relative text-xs w-full cursor-pointer h-auto font-sans font-semibold group/carrier">
        News and Awards
        <FontAwesomeIcon className="text-xs" icon={faAngleDown} />

     
        <ul className="hidden absolute w-52 top-0 right-full bg-slate-50 shadow-md p-4 rounded-md shadow-black/25 group-hover/carrier:block   group-hover/carrier:transition-all group-hover/carrier:delay-300 ">
          <li className="p-2 w-full cursor-pointer">News</li>
          <li className="p-2 w-full cursor-pointer">Events</li>
          <li className="p-2 w-full cursor-pointer">Awards</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

                                {/* <div className='text-slate-900 font-semibold'>Login</div> */}
                            </div>
                        </div>
        
                </div>
            </header>

    </div>
  )
}

export default Header