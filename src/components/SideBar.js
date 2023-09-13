import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {

  
  
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  // console.log(isMenuOpen)
  if(!isMenuOpen)return null
  else {
  return (

   <div className='p-4 shadow-lg'>
   
   <div className='pt-3'>
   <Link to="/"><h1 className='pt-1'>Home</h1></Link>
    <h1 className='pt-1'>Shorts</h1>
    <h1 className='pt-1'>Videos</h1>
    <h1 className='pt-1'>Live</h1>
   </div>
  
   <div className='pt-3 '>
    <h1 className='font-bold'>Subscriptions</h1>
    <ul>
        <li className='pt-1'>Music</li>
        <li className='pt-1'>Sports</li>
        <li className='pt-1'>Games</li>
        <li className='pt-1'>Movies</li>

    </ul>
   </div>

   <div className='pt-3'>
   <h1 className='font-bold'>Watch Later</h1>
    <ul>
        <li className='pt-1'>Music</li>
        <li className='pt-1'>Sports</li>
        <li className='pt-1'>Games</li>
        <li className='pt-1'>Movies</li>

    </ul>
   </div>

    </div>
  )
}
}

export default SideBar