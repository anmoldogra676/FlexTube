import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './Comment';
import SideVideo from './SideVideo.js';
import { myAuthApi } from '../utils/contants';


const WatchPage = () => {
    const dispatch = useDispatch();
    const[VideoData, SetVideoData] = useState({}); // info about currently running video
    useEffect(()=>{
     dispatch(closeMenu());
    },[])
    
    const handleSearch =async (videoId)=>{
      const searcdQueryurl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${myAuthApi}`
      const response = await fetch(searcdQueryurl);
      const result = await response.json();
      console.log(result?.items[0].snippet);
      SetVideoData(result?.items[0].snippet)
    
  }
 

    
    useEffect( ()=>{
      window.scrollTo({
        top: 0,
      behavior: 'smooth',
      });

    })
    

    const [searchLink] = useSearchParams();
    const uniqueId = searchLink.get("v");
    console.log(uniqueId)
    useEffect(()=>{
      handleSearch(uniqueId);
    },[uniqueId])
  // I want id of video
  return (
    <>
    
    <div className='watchPageflex flex-col '>
    {/* <Fetchdata uniqueId ={uniqueId}/> */}
    <div className='videoPlayer pl-[2.7rem] pt-[2.75rem] '>
        <iframe className="rounded-lg" width="680" height="400" 
         src={"https://www.youtube.com/embed/"+uniqueId +"?autoplay=1&mute=0"}
         title="YouTube video player"  allow="
         autoplay; " ></iframe>
    </div>
    
    <div className='pl-10 pt-4 '>
    <h1 className='text-lg font-bold flex mt-1 mb-2'>
      <span className='' >{VideoData?.title}</span>
    </h1>
    <h1 className='text-sm w-[43rem] line-clamp-2 '>{VideoData?.description}</h1>
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