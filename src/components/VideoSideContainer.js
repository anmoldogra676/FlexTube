import React from 'react'
import { useState,useEffect } from 'react';
import {VideoSuggestionurl,options} from "../utils/contants.js"
import SideVideoCard from './SideVideoCard.js';
import { Link } from 'react-router-dom';
const VideoSideContainer = ({uniqueId}) => {
    let [videos, setVideos] = useState([]);
    // console.log(uniqueId)
    useEffect(()=>{
       handleVideos(uniqueId);
    },[])
    const handleVideos = async (uniqueId)=>{
        // console.log(uniqueId)
          const searcdQueryurl = VideoSuggestionurl+`search?part=snippet&relatedToVideoId=${uniqueId}&maxResults=10&order=date&regionCode=IN`
          const data = await fetch(searcdQueryurl,options);
          const json = await data.json();
          setVideos(json.items)  
    }
    return ( 
      <div className='pt-6 flex flex-wrap'>
        {
          videos.map((item)=> {
          return ( <Link to={"/watch?v="+item?.id?.videoId}><SideVideoCard  info={item} /></Link>)
  }
        )
  }
      </div>
    
  )
}

export default VideoSideContainer