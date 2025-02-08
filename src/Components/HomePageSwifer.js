import React, {  useState,useEffect } from 'react';
import axios from '../fetch/axios.js'
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function HomePageSwifer() {
    const [data, setData] = useState("");
    const [error, setError] = useState(null);
    useEffect(() => {
       
            async function fetchData(){
            const response= await axios.get('/api/homePage')
            setData(response.data)
            console.log(response.data)
            }
        try{
        fetchData()
        }
        catch(err){
            setError(err.response?.data)
        }
    }, []);


  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          speed:50,
          disableOnInteraction:false,
        pauseOnMouseEnter: true, 
        }}
        className=" h-40 md:h-full  overflow-hidden m-0 p-0 !w-full   "
      >
        {data ? data.map((each)=>{
            return(
                <SwiperSlide className='relative !w-full aspect-auto h-full bg-gray-500'>
                  <img  className='!w-full h-full object-fill brightness-110' src={each.img} alt={"home page image"}></img>
                  <div className='absolute w-full  brightness-110 bg-gradient-to-b from-black/60 via-transparent to-white/25 h-full inset-0'>
                    {/* <h1 className='text-4xl mb-4 text-wrap text-teal-600 font-bold'>{each.heading}</h1>
                    <p className='text-3xl text-wrap text-white font-semibold  '>{each.shortInfo}</p> */}
                  </div>
                </SwiperSlide>
            )
        })

        :<></>}
        
       
       
      </Swiper>
    </>
  );
}
