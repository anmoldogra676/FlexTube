import React from 'react'
import { useParams } from 'react-router-dom'
import VideoSideContainer from './VideoSideContainer'
import SideBar from './SideBar'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/appSlice'
import { useEffect } from 'react'

const SearchComponent = () => {
    const {search} = useParams()
    const dispatch = useDispatch();
    
    useEffect(()=>{
     dispatch(openMenu());
    },[])

    console.log(search)
    
  return (
    
    <div className='mt-3  pt-4 flex'>
        <SideBar/>
        <VideoSideContainer uniqueId={2} search={search} />

    </div>
  )
}

export default SearchComponent