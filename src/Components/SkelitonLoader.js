import React from 'react'

function SkelitonLoader() {
    return (
        <>
            {/* <div class="container"> */}

                {/* <div class="card">
                    <div class="card-img skeleton">
                        {/* <!-- waiting for img to load from javascript --> */}
                    {/* </div>
                    <div class="card-body">
                        <h2 class="card-title skeleton"> */}
                            {/* <!-- wating for title to load from javascript --> */}
                        {/* </h2>
                        <p class="card-intro skeleton"> */}
                            {/* <!-- waiting for intro to load from Javascript --> */}
                        {/* </p>
                    </div>
                </div> */} 
                {/* <div class="card">
                    <div class="card-img">
                        <img src="https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg" />
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">
                            {/* Drive (2011) */}
                        {/* </h2>
                        <p class="card-intro">
                            {/* Driver is a skilled Hollywood stuntman who moonlights as a getaway driv... */}
                        {/* </p> */}
                    {/* </div> */}
                {/* </div>
            </div> */} 


            <div className=" relative flex flex-col w-3/4 p-6 mb-6 min-h-screen  ">
                <div>
                    <h2 className="text-xl font-bold mb-4 ml-4 w-32 sm:w-48 p-4 bg-gray-400/15 skeleton rounded-md animate-shine "></h2>
                    {/* Doctor Cards */}

                    <div

                        className="flex h-auto items-center w-full bg-white p-4   mb-4"
                    >
                        <div className="flex w-3/5 h-auto gap-4">


                            {/* <img className="w-1/4 h-40  p-4  md:w-48" src={doctor.doctor_image} alt="doctor image" /> */}
                            <div className="w-1/4 h-40  p-2 bg-gray-400/15 skeleton  rounded-md animate-shine  md:w-48">


                            </div>
                            <div className="w-3/4 flex flex-col h-auto  overflow-hidden pb-2 ">

                                <div className="flex flex-col gap-y-1 mb-2  ">
                                    <h3 className="text-lg font-semibold bg-gray-400/15 p-2 rounded-md w-32 skeleton"></h3>
                                    <p className="text-sm bg-gray-400/15  p-2 font-semibold w-28  rounded-md skeleton "></p>
                                    <p className="text-sm bg-gray-400/15 w-28 p-2 rounded-md skeleton"></p>


                                </div>
                                <div className="flex gap-x-2 justify-start items-center p-2 ">

                                </div>
                                <div className="flex gap-2 ">

                                    <label className="text-sm  w-10 bg-gray-400/15 rounded-md p-2  skeleton ">

                                    </label>
                                    <div className='flex gap-2 skeleton'>

                                        <div className="mr-1 rounded-md bg-gray-400/15 text-xs p-2 w-24 skeleton"></div>
                                        <div className="mr-1 rounded-md bg-gray-400/15 text-xs p-2 w-24 skeleton"></div>
                                    </div>

                                </div>
                                <p className="text-sm text-black/90 min-w-28 bg-gray-400/15 skeleton mt-4  max-w-72 h-full max-h-32 line-clamp-6 text-ellipsis overflow-hidden  text-wrap">
                                    {/* {doctor.experience} */}

                                </p>

                            </div>

                        </div>
                        <div className="w-3/5 flex justify-center">

                            <button className="bg-gray-400/15 p-3 sm:w-52 sm:p-4 h-6 skeleton  px-8 py-2 rounded-lg ">
                                {/* Book Appointment */}
                            </button>

                        </div>
                    </div>



                </div>

              {[1,2,3].map((each)=>{
                return (

<div>
                  

                  <div

                      className="flex h-auto items-center w-full bg-white p-4    mb-4"
                  >
                      <div className="flex w-3/5 h-auto gap-4">


                          {/* <img className="w-1/4 h-40  p-4  md:w-48" src={doctor.doctor_image} alt="doctor image" /> */}
                          <div className="w-1/4 h-40  p-4 bg-gray-400/15 skeleton rounded-md  md:w-48">


                          </div>
                          <div className="w-3/4 flex flex-col h-auto  overflow-hidden pb-2  ">

                              <div className="flex flex-col gap-y-1 mb-4  ">
                                  <h3 className="text-lg font-semibold bg-gray-400/15 p-2 skeleton rounded-md w-32"></h3>
                                  <p className="text-sm bg-gray-400/15     font-semibold w-28 p-2 rounded-md "></p>
                                  <p className="text-sm bg-gray-400/15 w-28 p-2 rounded-md "></p>


                              </div>
                              <div className="flex gap-x-2 justify-start items-center">

                              </div>
                              <div className="flex gap-2 ">

                                  <label className="text-sm py-0.5 w-10 bg-gray-400/20 skeleton rounded-md p-2 pr-1.5">

                                  </label>
                                  <div className='flex gap-2'>

                                      <div className="mr-1 rounded-md bg-gray-400/15 skeleton text-xs p-2 w-24 "></div>
                                      <div className="mr-1 rounded-md bg-gray-400/15 text-xs skeleton p-2 w-24"></div>
                                  </div>

                              </div>
                              <p className="text-sm text-black/90 min-w-28 bg-gray-400/15 skeleton mt-4  max-w-72 h-full max-h-32 line-clamp-6 text-ellipsis overflow-hidden  text-wrap">
                                  {/* {doctor.experience} */}

                              </p>

                          </div>

                      </div>
                      <div className="w-3/5 flex justify-center">

                          <button className="bg-gray-400/15 skeleton p-3 w-28  sm:w-52 sm:p-4 h-6  px-8 py-2 rounded-lg ">
                              {/* Book Appointment */}
                          </button>

                      </div>
                  </div>



              </div>




                )
              })}
                




            </div>

        </>
    )
}

export default SkelitonLoader

