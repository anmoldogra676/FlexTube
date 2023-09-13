import React from 'react'
import { useState,useEffect } from 'react';
import {VideoSuggestionurl,options} from "../utils/contants.js"
import SideVideoCard from './SideVideoCard.js';
const VideoSideContainer = ({uniqueId}) => {
    let [videos, setVideos] = useState([]);
    // console.log(uniqueId)
    useEffect(()=>{
       handleVideos(uniqueId);
    },[])
    const handleVideos = async (uniqueId)=>{
        // console.log(uniqueId)
          const searcdQueryurl = VideoSuggestionurl+`search?part=snippet&relatedToVideoId=${uniqueId}&maxResults=50&order=date&regionCode=IN`
          const data = await fetch(searcdQueryurl,options);
          const json = await data.json();
          setVideos(json.items)  
    }
    return ( 
      <div className='pt-6 flex flex-wrap'>
        {
          videos.map((item)=> {
          return ( <SideVideoCard  info={item} />)
  }
        )
  }
      </div>
    
  )
}

export default VideoSideContainer