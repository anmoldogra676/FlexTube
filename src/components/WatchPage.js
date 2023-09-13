import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './Comment';
import Fetchdata from "./Fetchdata.js"
import SideVideo from './SideVideo.js';


const WatchPage = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
     dispatch(closeMenu());
    },[])
    
    

    const [searchLink] = useSearchParams();
    const uniqueId = searchLink.get("v");
    // console.log(uniqueId)
  // I want id of video
  return (
    <>
    <div className='flex flex-col'>
    {/* <Fetchdata uniqueId ={uniqueId}/> */}
    <div className='videoPlayer pl-[2.7rem] pt-[2.75rem] '>
        <iframe className="rounded-lg" width="680" height="400" 
         src={"https://www.youtube.com/embed/"+uniqueId +"?autoplay=1&mute=0"}
         title="YouTube video player"  allow="
         autoplay; " ></iframe>
    </div>
    <div className='pl-10 pt-4' >
      <CommentContainer/>
    </div>
    </div>
    <div className="ml-20">
    <  SideVideo uniqueId={uniqueId}/>
    </div>
    </>
  )
}

export default WatchPage