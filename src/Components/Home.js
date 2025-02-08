import React from 'react'
import HomePageSwifer from './HomePageSwifer'
import HomePageListSection from './HomePageListSection'
function Home() {
  return (
    <div className=" relative top-20 sm:top-32 flex flex-col    h-auto  w-full  ">
       
        <div className=' h-[500px] w-full '>
        <HomePageSwifer />

        </div>
        <HomePageListSection/>
    </div>
  )
}

export default Home
