import React from 'react'
import { Outlet } from 'react-router-dom'
import Bubbles from './Extra/Bubbles'

const Layout:React.FC = () => {
  return (
    <>   
    <div className={`h-screen w-screen sm:flex-row-reverse flex justify-center items-center bg-transparent flex-col relative`}>
    
       <Outlet/>
       <Bubbles yStart={300} yEnd={-1100}/>
    </div>
    </>

  )
}
export default Layout
