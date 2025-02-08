import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
function Layout(){
    return (
        <div className='relative w-full  min-h-screen  '>
          <Header/>
            <Outlet />
        </div>
    )
}

export default Layout