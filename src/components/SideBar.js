import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdHome} from "react-icons/md";
import {MdPhotoLibrary} from "react-icons/md"
import {MdSubscriptions} from "react-icons/md"
const SideBar = () => {

  
  const fontStyles = { fontSize: '30px'}
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  // console.log(isMenuOpen)
  if(!isMenuOpen)return null
  else {
  return (

   <div className='p-4 shadow-lg'>
   
  
   <Link to="/">
    <div className='mt-4 ' >
    <h1 className='ml-2 '><MdHome style={fontStyles}/></h1>
    <h1 className=' ml-2 text-sm '>Home</h1>
    </div>
    </Link>
    <div className='cursor-pointer' >
    <h1 className='ml-2 mt-10'><MdPhotoLibrary style={fontStyles}/></h1>
    <h1 className=' ml-2 text-sm '>Library</h1>
    </div>

    <div className='cursor-pointer'>
    <h1 className='ml-2 mt-10'><MdSubscriptions style={fontStyles}/></h1>
    <h1 className=' ml-2 text-sm '>Subscriptions</h1>
    </div>
   </div>
  
   


  )
}
}

export default SideBar